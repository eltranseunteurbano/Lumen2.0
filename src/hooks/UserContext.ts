import { createContext } from "react";
import HookUpdateManager from '../objects/HookUpdate';
import Adviser from '../objects/Adviser';
import Client from '../objects/Client';

export class UserFirebase extends HookUpdateManager {

    user?: Client | Adviser;
    userFirebase?: firebase.User;
    type: string;

    constructor() {
        super();
        this.type = "";
    }

    getAsesor(): Adviser | undefined {
        if (this.user && (this.user.type === NameUser.Adviser || this.type === NameUser.Adviser)) {
            return this.user as Adviser;
        }
        return undefined;
    }

    getClient(): Client | undefined {
        if (this.user && (this.user.type === NameUser.Client || this.type === NameUser.Client)) {
            return this.user as Client;
        }
        return undefined;
    }

    setUserFirebase(user: firebase.User) {
        this.userFirebase = user;
    }

}



export var User = new UserFirebase();
const UserContext = createContext(User);

export default UserContext;


export var NameUser = {
    Client: "cliente",
    Adviser: "asesor"
}


export class Usuario {
    UID: string;
    type: string;
    name: string;
    lastName: string;
    cedula: string;
    email: string;

    constructor(client?: Client) {
        this.UID = client ? client.UID : "";
        this.type = client ? client.type : "";
        this.name = client ? client.name : "";
        this.email = client ? client.email : "";
        this.cedula = client ? client.cedula : "";
        this.lastName = client ? client.lastName : "";
    }

    setType(type: string) {
        this.type = type;
    }
}