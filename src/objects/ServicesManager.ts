import BRANCHES from '../constants/Branches';
import Servicio, { Service } from './Service';
import { DataBase } from '../hooks/DatabaseContext';
import HookUpdateManager from './HookUpdate';
import { User } from '../hooks/UserContext';

export class ServicesManager extends HookUpdateManager {

    services: Servicio[];
    currentService?: Servicio;
    // render: ServicesManager | undefined;

    constructor() {
        super();
        this.services = [];
    }

    getAllServices(load?: Function) {
        console.log("Va bein")
        console.log(User.user)

        User.getUserLocal(() => {

            let ruta = `${BRANCHES.CASES}`;

            DataBase.readBrachDatabase(ruta, (services: Servicio[]) => {
                let tempServices: Servicio[] = [];
                services.forEach((s) => {
                    tempServices.push(new Service(s));
                });

                this.services = tempServices;
                this.updateService();

                if (load) {
                    load(this.services)
                }

            });

        });
    }

    updateService() {
        if (this.currentService) {
            console.log("Actualizando")
            this.services.forEach((service) => {
                if (this.currentService) {
                    if (this.currentService.UID === service.UID) {
                        this.setCurrentService(service);
                        return;
                    }
                }
            });
        }
    }

    setCurrentService(service: Servicio) {
        this.currentService = service;
    }
}

export default ServicesManager;