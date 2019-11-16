import React from 'react';
import Firebase from '../constants/firebase/firebaseSetup';
import { UserFirebase } from './UserContext';
import { IPropsCase } from '../components/Cases/Case/Case';

import BRANCHES from '../constants/Branches';

export interface IObjectDatabase {
    UID?: string;
}

class DataBaseFirebase {

    usuario?: UserFirebase;
    user?: firebase.User;
    database: firebase.database.Database;

    constructor() {
        console.log("Inicializando")
        this.getUserChangeDataBase();
        this.database = Firebase.database();
    }

    writeUserData(userData: UserFirebase) {
        if (this.user) {
            let ruta = `${BRANCHES.USERS}/${this.user.uid}`;

            let dataUser = JSON.parse(JSON.stringify(userData));
            this.writeDatabase(ruta, dataUser);
        }
    }

    async getUserFirebase(user: any, action?: Function) {
        this.user = user;
        if (action) {
            action();
        }
    }

    readBrachOnlyDatabase(ruta: string, load: Function) {
        var refDataBase = this.database.ref(ruta);

        refDataBase.once('value', (snapshots: firebase.database.DataSnapshot) => {
            let objetos: { result: any, url: string }[] | any = [];
            let nChilds: number = 0;
            snapshots.forEach(snapshot => {
                objetos.push(snapshot.val());
                nChilds++;
            });

            load(objetos, nChilds);
        });
    }

    readBrachDatabase(ruta: string, load: Function) {
        var refDataBase = Firebase.database().ref(ruta);

        refDataBase.on('value', (snapshots: firebase.database.DataSnapshot) => {
            let objetos: { result: any, url: string }[] | any = [];
            let nChilds: number = 0;
            snapshots.forEach(snapshot => {
                objetos.push(snapshot.val());
                nChilds++;
            });

            load(objetos, nChilds);
        });
    }



    getUserChangeDataBase(load?: Function) {
        if (this.user == null) {
            Firebase.auth().onAuthStateChanged((user: any) => {
                this.getUserFirebase(user, load);
            });
        } else {
            if (load) {
                load();
            }
        }
    }

    getCurrentUserUID(load: Function) {
        this.getUserChangeDataBase(() => {
            if (this.user) {
                load(this.user.uid);
            }
        });
    }

    writeDatabase(url: string, objeto: IObjectDatabase | any) {
        Firebase.database().ref(url).set(objeto);
    }

    writeDatabasePush(url: string, objeto: IObjectDatabase) {
        let UID: string = Firebase.database().ref(url).push().key || "";
        objeto.UID = UID;
        var resultObject = JSON.parse(JSON.stringify(objeto));

        if (UID !== "") {
            Firebase.database().ref(`${url}/${UID}`).set(resultObject);
        }

        // this.updateBrach(`${url}/${UID}`, objeto); /**Algo pasa */
    }

    updateBrach(url: string, object: IObjectDatabase) {
        let updates: any = {};
        updates[url] = object;
        console.log(updates)
        this.getDatabase().ref().set(updates);
    }

    getDatabase() {
        return Firebase.database();
    }


}

export var DataBase = new DataBaseFirebase();

export const DatabaseContext = React.createContext(DataBase);

export default DatabaseContext;

