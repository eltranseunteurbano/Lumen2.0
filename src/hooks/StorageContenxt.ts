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

    saveBlob(route: string, file: Blob, name: string) {
        let refStorage = Storage.storege.ref(route).child(name);
        refStorage.put(file);
    }

    loadFile(route: string, load:Function) {
        let refStorage = Storage.storege.ref(route)
        refStorage.getDownloadURL().then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            load(url)
        }).catch(function (error) {
            // Handle any errors
        });
    }

}

export var Storage = new StorageFirebase();

var StorageContext = createContext(Storage);

export default StorageContext;


