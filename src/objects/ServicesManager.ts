import BRANCHES from '../constants/Branches';
import Servicio, { Service } from './Service';
import { DataBase } from '../hooks/DatabaseContext';
import HookUpdateManager from './HookUpdate';

export class ServicesManager extends HookUpdateManager{

    services: Servicio[];
    currentService?: Servicio;
    // render: ServicesManager | undefined;

    constructor() {
        super();
        this.services = [];
    }

    getAllServices(load?: Function) {

        DataBase.getUserChangeDataBase(async () => {
            console.log("Obteniendo casos.......");

            let ruta = `${BRANCHES.CASES}`;

            DataBase.readBrachOnlyDatabase(ruta, (services: Servicio[]) => {
                let tempServices: Servicio[] = [];
                services.forEach((s) => {
                    tempServices.push(new Service(s));
                });
                this.services = tempServices;
                // this.updateComponent();
                if (load) {
                    load(this.services)
                   
                }
            
            });

        });
    }

    setCurrentService(service: Servicio) {
        this.currentService = service;
    }
}

export default ServicesManager;