import React from "react";
import { IObjectDatabase } from './DatabaseContext';
import HookUpdateManager from '../objects/HookUpdate';


export class UserFirebase extends HookUpdateManager implements IObjectDatabase {
    UID: string;
    type: string;
    name: string;
    email: string;
    user?: firebase.User;

    constructor() {
        super();
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

}



export var User = new UserFirebase();
const UserContext = React.createContext(User);

export default UserContext;