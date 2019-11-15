import { DataBase } from '../hooks/DatabaseContext';
import Service from './Service';

export class ODate {
    day: string;
    month: string;
    year: string;
    hora: string;
    minute: string;
    constructor() {
        let time = new Date();
        this.day = time.getDay().toString();
        this.month = time.getMonth().toString();
        this.year = time.getFullYear().toString();
        this.hora = time.getHours().toString();
        this.minute = time.getMinutes().toString();
    }
}

export interface IUserHistory {
    time: ODate;
    userUID: string;
}

export class UserHistoryItem {
    ROUTE?: string;
    time: ODate;
    userUID: string;

    constructor(userHistoryItem?: UserHistoryItem, ROUTE?: string) {
        this.ROUTE = ROUTE;
        this.time = userHistoryItem ? userHistoryItem.time : new ODate();
        this.userUID = userHistoryItem ? userHistoryItem.userUID : "";

        if (!userHistoryItem) {
            this.getUserUID();
        }
    }

    getUserUID() {
        
        DataBase.getCurrentUserUID((UID: string) => {
            this.userUID = UID;
            if (this.ROUTE) {
                DataBase.writeDatabase(this.ROUTE, { time: this.time, userUID: this.userUID });
            }
        });
    }
}

export class UserHistory {
    UID?: string;
    service?: Service;
    ROUTE?: string;
    history: UserHistoryItem[];

    constructor(service?: Service, userHistory?: UserHistory) {
        this.service = service ? service : undefined;
        this.UID = service ? "history" : undefined;
        this.ROUTE = service ? `${service.ROUTE}/${this.UID}` : undefined;
        this.history = userHistory ? this.constructorUserHistory(userHistory.history) : [];
    }

    addHistroy() {
        this.history.push(new UserHistoryItem(undefined, `${this.ROUTE}/history/${this.history.length}`));
    }

    constructorUserHistory(history?: UserHistoryItem[]) {
        let resultHistory: UserHistoryItem[] = [];
        if (history) {
            history.forEach((histor, index) => {
                resultHistory.push(new UserHistoryItem(histor, `${this.ROUTE}/history/${index}`));
            });
        }
        return resultHistory;
    }
}

export default UserHistory;