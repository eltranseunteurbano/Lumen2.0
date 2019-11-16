import { useState, ReactChild } from "react";
import { FunctionExpression } from "@babel/types";

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
            let newHook = new HookUpdate(type, value, update);
            this.updates.push(newHook);
            return newHook;
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

    useState<T>(type: string, propiedades?: [T, React.Dispatch<React.SetStateAction<any>>]):[T, Function] {

        let value: any = [];
        let find = false;
        for (let i = 0; i < this.updates.length; i++) {
            let update = this.updates[i];

            if (update.id === type) {
                value = update.useState.bind(update)();
                i = this.updates.length;
                find = true;
            }
        }

        if (!find) {
            value = propiedades;

            let hook = this.addUpdate(type, value[0], value[1]);
            if (hook) {
                value = hook.useState<T>();
            }
        }

        return value;
    }
}

export default HookUpdateManager;


export class HookUpdate {
    id: string;
    valueObject: Object;
    update: Function;
    hook?: any;

    constructor(id: string, value: Object, update: Function) {
        this.id = id;
        this.valueObject = value;
        this.update = update;
    }

    setUpdate(object: Object) {
        this.valueObject = object;
        this.update(object);
    }

    useState<T>(): [T, Function] {
        let propiedad: T = <any>this.valueObject;
        return [propiedad, this.setUpdate.bind(this)];
    }

    value() {
        return this.valueObject;
    }
}
