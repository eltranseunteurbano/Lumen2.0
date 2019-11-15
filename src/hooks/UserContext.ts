import React from "react";
import { IObjectDatabase } from './DatabaseContext';

export class UserFirebase implements IObjectDatabase {
    UID: string;
    type: string;
    name: string;
    email: string;
    user?: firebase.User;

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
}

export var UserFirebaseData = new UserFirebase();
const UserContext = React.createContext(UserFirebaseData);

export default UserContext;