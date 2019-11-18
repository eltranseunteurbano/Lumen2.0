import React from 'react';
import Firebase from '../constants/firebase/firebaseSetup';
import { UserFirebase, NameUser, User } from './UserContext';

import BRANCHES from '../constants/Branches';
import Usuario from '../objects/User/Usuario';
import Client from '../objects/User/Client';
import Adviser from '../objects/User/Adviser';

export interface IObjectDatabase {
    UID?: string;
}

class DataBaseFirebase {

    user?: UserFirebase;
    userFirebase?: firebase.User;
    database: firebase.database.Database;

    constructor() {
        console.log("Inicializando")
        this.getUserChangeDataBase();
        this.database = Firebase.database();
    }

    writeUserData(userData: UserFirebase) {
        if (this.userFirebase) {
            let ruta = `${BRANCHES.USERS}/${this.userFirebase.uid}`;

            let dataUser = JSON.parse(JSON.stringify(userData));
            this.writeDatabase(ruta, dataUser);
        }
    }

    async getUserFirebase(user: firebase.User, load?: Function) {

        this.user = User;
        this.user.userFirebase = user;
        this.userFirebase = user;


        let ruta = `${BRANCHES.USERS}/${this.userFirebase.uid}`;

        DataBase.readBrachOnlyDatabaseObject(ruta, (result: any) => {
            let usuario: Client | Adviser = result.val();
            if (this.user && this.user.user == null) {
                if (usuario.type === NameUser.Client) {
                    let userClient = usuario as Client;
                    this.user.user = new Client(userClient);
                    User.type = this.user.user.type;
                } else if (usuario.type == NameUser.Adviser) {
                    let userAdviser = usuario as Adviser;
                    this.user.user = new Adviser(userAdviser);
                    User.type = this.user.user.type;
                }
            }

            if (load) {
                load();

            }
        });
    }

    readBrachOnlyDatabaseObject(ruta: string, load: Function) {
        var refDataBase = this.database.ref(ruta);

        refDataBase.once('value', (snapshots: firebase.database.DataSnapshot) => {
            load(snapshots);
        });
    }


    readBrachOnlyDatabase(ruta: string, load: Function) {
        var refDataBase = this.database.ref(ruta);

        refDataBase.once('value', (snapshots: firebase.database.DataSnapshot) => {
            let result: any[] = [];
            let nChilds: number = 0;
            snapshots.forEach(snapshot => {
                result.push(snapshot.val());
                nChilds++;
            });

            load(result, nChilds);
        });
    }

    readBrachOnlyDatabaseTwo(ruta: string, load: Function) {
        var refDataBase = this.database.ref(ruta);

        refDataBase.once('value', (snapshots: firebase.database.DataSnapshot) => {
            let result: any[] = [];
            let nChilds: number = 0;
            snapshots.forEach(snapshot => {
                snapshot.forEach(snapshot_two => {
                    result.push(snapshot.val());
                    nChilds++;
                });
            });

            load(result, nChilds);
        });
    }

    readBrachDatabase(ruta: string, load: Function) {
        var refDataBase = Firebase.database().ref(ruta);

        refDataBase.on('value', (snapshots: firebase.database.DataSnapshot) => {
            let result: any[] = [];
            let nChilds: number = 0;
            snapshots.forEach(snapshot => {
                result.push(snapshot.val());
                nChilds++;
            });

            load(result, nChilds);
        });
    }

    readBrachDatabaseFilter(ruta: string, fitro: string, value: string, load: Function) {
        var refDataBase = Firebase.database().ref(ruta);

        refDataBase.orderByChild(fitro).equalTo(value).on("value", (snapshotsResult) => {
            let result: any[] = [];
            let nChilds: number = 0;

            snapshotsResult.forEach((snapshot: any) => {
                result.push(snapshot.val());
                nChilds++;
            });

            load(result, nChilds);
        });


    }



    getUserChangeDataBase(load?: Function) {
        if (this.userFirebase == null || this.user == null) {
            Firebase.auth().onAuthStateChanged((user: firebase.User | null) => {

                if (user) {
                    this.getUserFirebase(user, load);
                }
            });
        } else {
            if (load) {
                load();
            }
        }
    }

    getCurrentUserUID(load: Function) {
        this.getUserChangeDataBase(() => {
            if (this.userFirebase) {
                load(this.userFirebase.uid);
            }
        });
    }

    writeDatabase(url: string, objeto: IObjectDatabase | any) {
        Firebase.database().ref(url).set(objeto);
    }

    writeDatabasePush(url: string, objeto: IObjectDatabase, load?: Function) {
        let UID: string = Firebase.database().ref(url).push().key || "";
        objeto.UID = UID;
        var ruta = `${url}/${UID}`;
        if (load) {
            load(UID);
        }
        var resultObject = JSON.parse(JSON.stringify(objeto));

        if (UID !== "") {
            Firebase.database().ref(ruta).set(resultObject);
        }
    }

    writeDatabaseUser(url: string, user: Usuario, load: Function) {
        var resultObject = JSON.parse(JSON.stringify(user));
        Firebase.database().ref(`${url}/${user.UID}`).set(resultObject);
        load();
    }

    writeDatabasePushUID(url: string, load: Function) {
        let UID: string = Firebase.database().ref(url).push().key || "";
        let objeto = load(UID);
        var resultObject = JSON.parse(JSON.stringify(objeto));

        if (UID !== "") {
            Firebase.database().ref(`${url}/${UID}`).set(resultObject);
        }
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

