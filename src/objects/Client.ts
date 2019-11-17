import { Usuario } from '../hooks/UserContext';
import { IObjectDatabase } from '../hooks/DatabaseContext';

class Client extends Usuario implements IObjectDatabase {

    requireService: string;
    clientType: string;
    legalName: string;
    NIT: string;

    constructor(client?: Client) {
        super();
        this.requireService = client ? client.requireService : "true";
        this.clientType = client ? client.clientType : "";
        this.legalName = client ? client.legalName : "";
        this.NIT = client ? client.NIT : "";
    }

}

export default Client;