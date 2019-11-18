import { IObjectDatabase } from '../../hooks/DatabaseContext';
import Usuario from './Usuario';

class Adviser extends Usuario implements IObjectDatabase {
    
    constructor(adviser?: Adviser) {
        super(adviser);
    }

}

export default Adviser;