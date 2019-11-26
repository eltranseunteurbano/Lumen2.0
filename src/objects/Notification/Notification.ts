import { DataBase, IObjectDatabase } from '../../hooks/DatabaseContext';
import BRANCHES from '../../constants/Branches';
import { ODate } from '../UserHistory';


class ONotification implements IObjectDatabase {

    UID: string;
    to: string;
    to_type: string;
    from: string;
    from_type: string;
    subject: string;
    subject__subtitle: string;
    description: string;
    orden: number;
    date: ODate;
    caseUID: string;

    constructor(notification?: ONotification) {
        this.UID = notification ? notification.UID : "";
        this.subject__subtitle = notification ? notification.subject__subtitle : "";
        this.to = notification ? notification.to : "";
        this.from = notification ? notification.from : "";
        this.subject = notification ? notification.subject : "";
        this.description = notification ? notification.description : "";
        this.orden = notification ? notification.orden : 0;
        this.date = notification ? notification.date : new ODate();

        this.to_type = notification ? notification.to_type : "";
        this.from_type = notification ? notification.from_type : "";

        this.caseUID = notification ? notification.caseUID : "";
    }

    setDescription(description: string) {
        this.description = description;
    }

    setCaseUID(caseUID: string) {
        this.caseUID = caseUID;
    }

    setSubject(subject: string) {
        this.subject = subject;
    }

    setSubject__subtitle(subject: string) {
        this.subject__subtitle = subject;
    }

    setTo_Type(type: string) {
        this.to_type = type;
    }

    setTo(UID: string, load: Function) {
        this.to = UID;
        DataBase.readBrachOnlyDatabaseObjectType(`${BRANCHES.USERS}/${this.to}/type`, (val: string) => {
            this.to_type = val;
            load();
        })
    }

    addToDatabase(load: Function) {
        DataBase.getUserChangeDataBase(() => {
            if (DataBase.userFirebase) {

                this.from = DataBase.userFirebase.uid;
                if (DataBase.user) {
                    this.from_type = DataBase.user.type;
                }

                let url = `${BRANCHES.NOTIFICATIONS}`;

                DataBase.readBrachOnlyDatabase(url, (casos: Notification[]) => {
                    let indice = casos.length + 1;
                    this.orden = indice;
                    DataBase.writeDatabasePush(url, this, (UID: string) => {
                        load();
                    });
                });
            }
        });
    }

}

export default ONotification;