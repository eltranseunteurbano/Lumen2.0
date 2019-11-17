import UserHistory, { ODate } from './UserHistory';
import { DataBase, IObjectDatabase } from '../hooks/DatabaseContext';
import BRANCHES from '../constants/Branches';
import StepManager from './StepManager';
import HookUpdateManager from './HookUpdate';

export class Service implements IObjectDatabase {

    UID?: string;
    ROUTE?:string;
    userUID: string;
    type: string;
    zona: string;
    electrodomesticos: string;
    servicioPrevio: string;
    numeroCatastral: string;
    caracteristica: string;
    facturaDigital: boolean;
    enviado: boolean;
    history: UserHistory;
    orden: number;
    date: ODate;
    steps: StepManager;

    updates: HookUpdateManager[];


    constructor(service?: Service) {

        /**-------Init var-------- */
        this.UID = service ? service.UID : undefined;
        this.ROUTE = this.UID ? `${BRANCHES.CASES}/${this.UID}` : undefined;

        this.steps = service ? new StepManager(this, service.steps): new StepManager();

        this.date = service ? service.date : new ODate();
        this.userUID = service ? service.userUID : "";
        this.type = service ? service.type : "";
        this.zona = service ? service.zona : "";
        this.electrodomesticos = service ? service.electrodomesticos : "";
        this.servicioPrevio = service ? service.servicioPrevio : "";
        this.numeroCatastral = service ? service.numeroCatastral : "";
        this.caracteristica = service ? service.caracteristica : "";
        this.facturaDigital = service ? service.facturaDigital : false;
        this.enviado = service ? service.enviado : false;
        this.history = service ? new UserHistory(this, service.history) : new UserHistory();
        this.orden = service ? service.orden : 0;

        this.updates = service ? service.updates : [];
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





export default Service;