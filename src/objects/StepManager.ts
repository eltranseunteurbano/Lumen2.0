import ReviewManager from './ReviewManger';
import Service from './Service';
import { DataBase } from '../hooks/DatabaseContext';


export class StepManager {
    UID?: string;
    ROUTE?: string;
    service?: Service;
    currentStep: number;
    steps: ServiceStep[];

    constructor(service?: Service, stepManager?: StepManager) {
        this.service = service ? service : undefined;
        this.UID = stepManager ? "steps" : undefined;
        this.ROUTE = (stepManager && this.service) ? `${this.service.ROUTE}/${this.UID}` : undefined;

        this.currentStep = stepManager ? stepManager.currentStep : -1;
        this.steps = stepManager ? this.constructorSteps(stepManager) : generateDefaultStep();
    }

    getCurrentStep() {
        return this.steps[this.currentStep];
    }

    startStep() {
        if (this.currentStep == -1) {
            this.setCurrentStep(0);

            let step = this.getCurrentStep();
            if (step) {
                step.setStatus(1);
            }
        }
    }

    setCurrentStep(value: number) {
        this.currentStep = value;
        DataBase.writeDatabase(`${this.ROUTE}/currentStep`, value)
    }

    constructorSteps(stepManager: StepManager) {
        var resultStep: ServiceStep[] = [];
        stepManager.steps.forEach((step, index) => {
            let newStep = new ServiceStep(this, step, `steps/${index}`);
            resultStep.push(newStep);
        });
        return resultStep;
    }
}

export default StepManager;

export class ServiceStep {
    stepManager?: StepManager;
    UID?: string;
    ROUTE?: string;
    status: number;
    information: string;
    type: string;
    review: ReviewManager;

    constructor(stepManager?: StepManager, serviceStep?: ServiceStep, UID?: string) {
        this.stepManager = stepManager;
        this.UID = serviceStep ? UID : undefined;
        this.ROUTE = (serviceStep && this.stepManager) ? `${this.stepManager.ROUTE}/${this.UID}` : undefined;
        this.status = serviceStep ? serviceStep.status : 0;
        this.information = serviceStep ? serviceStep.information : "No disponible";
        this.type = serviceStep ? serviceStep.type : "";
        this.review = serviceStep ? this.constructorReviewManager(serviceStep.review) : new ReviewManager();
    }

    setStatus(value: number) {
        this.status = value;
        DataBase.writeDatabase(`${this.ROUTE}/status`, value);
    }

    constructorReviewManager(reviewManager: ReviewManager) {
        let newReviewManager = new ReviewManager(this, reviewManager);
        return newReviewManager;
    }


}

function generateDefaultStep(stepManager?: StepManager) {

    const defaultStep = (information: string) => {
        let step = new ServiceStep(stepManager);
        step.information = information;
        return step;
    }

    return [
        defaultStep("Enviar documentación"),
        defaultStep("Documentación al área comercial"),
        defaultStep("Generación del número de expediente"),
        defaultStep("Visita al lugar"),
        defaultStep("Inicio del servicio")
    ];
}