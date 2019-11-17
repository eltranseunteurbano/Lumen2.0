import UserHistory, { ODate } from './UserHistory';
import { DataBase, IObjectDatabase } from '../hooks/DatabaseContext';
import BRANCHES from '../constants/Branches';
import StepManager from './StepManager';
import HookUpdateManager from './HookUpdate';

export class Service implements IObjectDatabase {

    UID?: string;
    ROUTE?: string;
    userUID: string;
    history: UserHistory;
    orden: number;
    date: ODate;
    steps: StepManager;

    information: ServiceData;

    updates: HookUpdateManager[];


    constructor(service?: Service) {

        /**-------Init var-------- */
        this.UID = service ? service.UID : undefined;
        this.ROUTE = this.UID ? `${BRANCHES.CASES}/${this.UID}` : undefined;

        this.date = service ? service.date : new ODate();
        this.steps = service ? new StepManager(this, service.steps) : new StepManager();
        this.history = service ? new UserHistory(this, service.history) : new UserHistory();
        this.updates = service ? service.updates : [];

        this.userUID = service ? service.userUID : "";
        this.orden = service ? service.orden : 0;

        this.information = {
            NAME: service ? service.information.NAME : "",
            TYPE: service ? service.information.TYPE : "",
            ZONE: service ? service.information.ZONE : "",
            HOME_APPLIANCES: service ? service.information.HOME_APPLIANCES : "",
            PREVIOUS_SERVICES: service ? service.information.PREVIOUS_SERVICES : "",
            CADASTRAL_NUMBER: service ? service.information.CADASTRAL_NUMBER : "",
            CHARACTERISTIC: service ? service.information.CHARACTERISTIC : "",
            DIGITAL_INVOICE: service ? service.information.DIGITAL_INVOICE : "false",
            SEND: service ? service.information.SEND : "false",
            TECNICO: {
                NAME: service ? service.information.TECNICO.NAME : "",
                LAST_NAME: service ? service.information.TECNICO.LAST_NAME : "",
                CEDULA: service ? service.information.TECNICO.CEDULA : "",
                PROFESSIONAL_CARD: service ? service.information.TECNICO.PROFESSIONAL_CARD : "",
            }
        }


    }


    addToDatabase() {
        DataBase.getUserChangeDataBase(() => {
            if (DataBase.user) {

                this.userUID = DataBase.user.uid;
                let url = `${BRANCHES.CASES}`;


                DataBase.readBrachOnlyDatabase(url, (casos: Service[]) => {
                    let indice = casos.length + 1;
                    this.orden = indice;

                    DataBase.writeDatabasePush(url, this);
                });
            }
        });
    }

    render() {
        let render = Object.assign({}, this);
        return render;
    }

}

interface ServiceData {
    NAME: string;
    TYPE: string;
    ZONE: string;
    HOME_APPLIANCES: string;
    PREVIOUS_SERVICES: string;
    CADASTRAL_NUMBER: string;
    CHARACTERISTIC: string;
    DIGITAL_INVOICE: string;
    SEND: string;
    TECNICO: {
        NAME: string;
        LAST_NAME: string;
        CEDULA: string;
        PROFESSIONAL_CARD: string;
    }
}





export default Service;