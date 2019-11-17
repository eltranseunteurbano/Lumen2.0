import { createContext } from "react";
import HookUpdateManager from '../objects/HookUpdate';
import Adviser from '../objects/User/Adviser';
import Client from '../objects/User/Client';
import { DataBase } from './DatabaseContext';
import BRANCHES from "../constants/Branches";
import Firebase from '../constants/firebase/firebaseSetup';

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

    async singIn(mail: string, pass: string, load?: Function) {

        try {
            let user = await Firebase.auth().signInWithEmailAndPassword(mail, pass);
            if (user) {
                if (user.user) {
                    this.setUserFirebase(user.user);
                    if (this.userFirebase) {
                        let ruta = `${BRANCHES.USERS}/${this.userFirebase.uid}`;
                        DataBase.readBrachOnlyDatabaseObject(ruta, (result: any) => {
                            let usuario: Client | Adviser = result.val();
                            if (usuario.type === NameUser.Client) {
                                let userClient = usuario as Client;
                                this.user = new Client(userClient);
                            } else if (usuario.type == NameUser.Adviser) {
                                let userAdviser = usuario as Adviser;
                                this.user = new Adviser(userAdviser);
                            }
                            if (load) {
                                load();
                            }
                        });
                    }
                }
            }

        } catch (error) {

        }


    }

    async singUp(mail: string, pass: string, load?: Function) {

        let user: firebase.auth.UserCredential = await Firebase.auth().createUserWithEmailAndPassword(mail, pass);
        if (user) {
            if (user.user) {
                this.setUserFirebase(user.user);
                if (this.userFirebase && this.user) {
                    this.user.UID = this.userFirebase.uid;
                }
            }

            if (this.user) {
                DataBase.writeDatabaseUser(BRANCHES.USERS, this.user, (UID: string) => {
                    console.log(user + ' Se ha registrado correctamente');
                    if (load) {
                        load();
                    }
                });

            }

        }
    }

    logOut(load?: Function) {
        Firebase.auth().signOut().then(function () {
            if (load) {
                load();
            }
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
    }

}



export var User = new UserFirebase();
const UserContext = createContext(User);

export default UserContext;


export var NameUser = {
    Client: "cliente",
    Adviser: "asesor"
}

