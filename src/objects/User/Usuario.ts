import Adviser from "./Adviser";
import Client from "./Client";

export class Usuario {
    UID: string;
    type: string;
    name: string;
    lastName: string;
    cedula: string;
    email: string;

    constructor(client?: Client | Adviser) {
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

export default Usuario;