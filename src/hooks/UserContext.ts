import React from "react";
import { IObjectDatabase } from './DatabaseContext';
import IHookUpdate from '../objects/IHookUpdate';

export class UserFirebase implements IObjectDatabase {
    UID: string;
    type: string;
    name: string;
    email: string;
    user?: firebase.User;
    updates:IHookUpdate[] = [];

    constructor() {
        this.UID = "";
        this.type = "";
        this.name = "";
        this.email = "";
    }

    setType(type: string) {
        this.type = type;
    }

    setUser(user: firebase.User) {
        this.user = user;
    }


    addUpdate(type: string, update: Function) {
        let find = false;
        let index = 0;
        for (let i = 0; i < this.updates.length; i++) {
            let update = this.updates[i];
            if (type === update.id) {
                find = true;
                i = this.updates.length;
                index = i;
            }
        }

        if (find) {
            this.updates.splice(index, 1);
            this.updates.push({ id: type, update: update })
        } else {
            this.updates.push({ id: type, update: update })
        }
    }

    update(type: string, object: any) {
        this.updates.forEach((update) => {
            if (update.id === type) {
                update.update(object);
                return;
            }
        });
    }
}

export var UserFirebaseData = new UserFirebase();
const UserContext = React.createContext(UserFirebaseData);

export default UserContext;