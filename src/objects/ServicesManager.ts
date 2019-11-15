import { DataBase } from '../hooks/DatabaseContext';
import BRANCHES from '../constants/Branches';
import Servicio, { Service } from './Service';
import IHookUpdate from './IHookUpdate';



export class ServicesManager {

    services: Servicio[];
    updates: IHookUpdate[];
    currentService?: Servicio;
    // render: ServicesManager | undefined;

    constructor() {
        this.services = [];
        this.updates = [];
    }

    addUpdate(type: string, update: Function) {
        this.updates.push({ id: type, update: update })
    }

    update(type: string, object: any) {
        this.updates.forEach((update) => {
            if (update.id === type) {
                update.update(object);
                return;
            }
        });
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
    /*
        updateComponent() {
            this.render = Object.assign({}, this)
            if (this.update) {
                this.update(this.render);
            }
        }
    */
    /*
     getContext() {
         this.render = Object.assign({}, this);
         return this;
     }
     */
}

export default ServicesManager;