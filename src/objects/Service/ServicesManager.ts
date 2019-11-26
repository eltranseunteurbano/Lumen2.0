import BRANCHES from '../../constants/Branches';
import Servicio, { Service } from './Service';
import { DataBase } from '../../hooks/DatabaseContext';
import HookUpdateManager from '../HookUpdate';
import { User, NameUser } from '../../hooks/UserContext';
import Notification from '../Notification/Notification';



export class ServicesManager extends HookUpdateManager {

    notifications: Notification[];
    currentNotificacion?: Notification;

    services: Servicio[];
    currentService?: Servicio;
    // render: ServicesManager | undefined;

    constructor() {
        super();
        this.services = [];

        this.notifications = [];
    }

    getAllServices(load?: Function) {

        User.getUserLocal(() => {
            if (User.user) {

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

                    DataBase.readBrachDatabaseFilter(ruta, "userUID", User.user.UID, (services: Servicio[]) => {

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

    getAllNotifications(load?: Function) {

        User.getUserLocal(() => {
            if (User.user) {

                let ruta = `${BRANCHES.NOTIFICATIONS}`;

                if (User.type === NameUser.Adviser) {

                    DataBase.readBrachDatabaseFilter(ruta, "to_type", NameUser.Adviser, (notifications: Notification[]) => {
                        let tempNotifications: Notification[] = [];
                        notifications.forEach((n) => {
                            tempNotifications.push(new Notification(n));
                        });

                        this.notifications = tempNotifications;
                        this.updateNotification();

                        if (load) {
                            load(this.notifications)
                        }
                    });

                } else if (User.type === NameUser.Client) {

                    DataBase.readBrachDatabaseFilter(ruta, "to", User.user.UID, (notifications: Notification[]) => {
                        let tempNotifications: Notification[] = [];
                        notifications.forEach((n) => {
                            tempNotifications.push(new Notification(n));
                        });

                        this.notifications = tempNotifications;
                        this.updateNotification();

                        if (load) {
                            load(this.notifications)
                        }
                    });
                }
            }

        });
    }

    updateService() {
        if (this.currentNotificacion) {
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

    updateNotification() {
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

    getCurrentService() {
        return this.currentService;
    }

    setCurrentService(service: Servicio) {
        this.currentService = service;
    }

    setCurrentServiceByUID(UID: string) {

        var servicio:Servicio | undefined = undefined;

        for (let index = 0; index < this.services.length; index++) {
            let service = this.services[index];
            if(service.UID === UID){
                servicio = service;
                index = this.services.length;
            }
        }
        if(servicio){
            this.setCurrentService(servicio);
        }
 
    }


    getCurrentNotification() {
        return this.currentNotificacion;
    }

    setCurrentNotification(notification: Notification) {
        this.currentNotificacion = notification;
    }
}

export default ServicesManager;