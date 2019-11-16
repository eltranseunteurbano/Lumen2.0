import { useState, ReactChild } from "react";

export class HookUpdateManager {

    updates: HookUpdate[] = [];

    addUpdate(type: string, value: Object, update: Function) {
        let find = false;
        //let index = 0;

        for (let i = 0; i < this.updates.length; i++) {
            let update = this.updates[i];
            if (type === update.id) {
                find = true;
                i = this.updates.length;
                // index = i;
            }
        }

        if (!find) {
            this.updates.push(new HookUpdate(type, value, update));
        }
    }

    updateValue(type: string) {
        let val: any = 0;
        this.updates.forEach((update) => {
            if (update.id === type) {
                val = update.value;
            }
        });
        return val;
    }


    useState(type: string, propiedades?: any[]) {

        let value: any = [];
        let find = false;
        for (let i = 0; i < this.updates.length; i++) {
            let update = this.updates[i];
            if (update.id === type) {
                value = update.useState();
                i = this.updates.length;
                find = true;
            }
        }

        if (!find) {
            value = propiedades;
            this.addUpdate(type, value[0], value[1]);
        }

        return value;
    }
}

export default HookUpdateManager;


export class HookUpdate {
    id: string;
    valueObject: Object;
    update: Function;

    constructor(id: string, value: Object, update: Function) {
        this.id = id;
        this.valueObject = value;
        this.update = update;

    }

    setUpdate(object: Object) {
        this.valueObject = object;
        this.update(object);
    }

    useState() {
        return [this.value.bind(this), this.setUpdate.bind(this)];
    }

    value() {
        return this.valueObject;
    }
}

/*interface IHookUpdate {
    id: string;
    value?: Object;
    update: Function;
}*/
