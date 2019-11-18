import BRANCHES from '../constants/Branches';
import Servicio, { Service } from './Service';
import { DataBase } from '../hooks/DatabaseContext';
import HookUpdateManager from './HookUpdate';
import { User, NameUser } from '../hooks/UserContext';

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
            if (User.user) {
                console.log(User.user)
                let ruta = `${BRANCHES.CASES}`;

                if (User.type === NameUser.Adviser) {

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

                } else if (User.type === NameUser.Client) {
                    console.log("Soy un cliente")
                    DataBase.readBrachDatabaseFilter(ruta, "userUID", User.user.UID, (services: Servicio[]) => {
                        console.log("Servicios ", services)
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

                }
            }

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