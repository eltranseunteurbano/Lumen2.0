import Firebase from '../constants/firebase/firebaseSetup';
import { createContext } from 'react';

class StorageFirebase {

    storege: firebase.storage.Storage;

    constructor() {
        this.storege = Firebase.storage();

    }

    almacenar(route: string, file: File) {
        let refStorage = Storage.storege.ref(route).child(file.name);
        refStorage.put(file);
    }

}

export var Storage = new StorageFirebase();

var StorageContext = createContext(Storage);

export default StorageContext;


