import Firebase from '../constants/firebase/firebaseSetup';
import { createContext } from 'react';

class StorageFirebase {

    storege: firebase.storage.Storage;

    constructor() {
        this.storege = Firebase.storage();

    }

    create() {
        this.storege.ref("archivo").put(new Blob());
    }

}

export var Storage = new StorageFirebase();

var StorageContext = createContext(Storage);

export default StorageContext;


