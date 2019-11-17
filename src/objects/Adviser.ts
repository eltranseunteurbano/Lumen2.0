import { Usuario } from '../hooks/UserContext';
import { IObjectDatabase } from '../hooks/DatabaseContext';

class Adviser extends Usuario implements IObjectDatabase {
    
    constructor(adviser?: Adviser) {
        super();
    }

}

export default Adviser;