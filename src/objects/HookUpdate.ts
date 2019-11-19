export class HookUpdateManager {

    updates: HookUpdate[] = [];
    historyState: HookHistoryState[] = [];

    addUpdate(type: string, value: Object, update: Function, history?: boolean) {
        let find = false;
        let index = 0;

        for (let i = 0; i < this.updates.length; i++) {
            let update = this.updates[i];
            if (type === update.id) {
                find = true;
                index = i;
                i = this.updates.length;
            }
        }

        if (find) {
            this.updates.splice(index, 1);
        }

        let currentHistory = undefined;
        if (history) {

            for (let i = 0; i < this.historyState.length; i++) {
                let historia = this.historyState[i];
                console.log("Paso")
                if (historia.id === type) {
                    console.log("Lo encontro")
                    currentHistory = historia;
                    i = this.historyState.length;
                }
            }

            if (currentHistory === undefined) {
                currentHistory = new HookHistoryState(type);
                currentHistory.addState(value);
                this.historyState.push(currentHistory)
            }
        }




        let newHook = new HookUpdate(this, type, value, update, currentHistory);
        this.updates.push(newHook);

        return newHook;
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

    useState<T>(type: string, propiedades?: [T, React.Dispatch<React.SetStateAction<any>>], history?: boolean): [T, Function, Function, Function] {

        let value: any = [];
        //let find = false;
        for (let i = 0; i < this.updates.length; i++) {
            let update = this.updates[i];

            if (update.id === type) {
                value = update.useState.bind(update)();
                i = this.updates.length;
                //find = true;
            }
        }

        if (propiedades) {
            value = propiedades;

            let hook = this.addUpdate(type, value[0], value[1], history);
            if (hook) {
                value = hook.useState<T>();
            }
        }

        return value;
    }
}

export default HookUpdateManager;


export class HookUpdate {

    hookMagenager: HookUpdateManager;
    id: string;
    valueObject: Object;
    update: Function;
    hook?: any;
    history?: HookHistoryState;


    constructor(hookMagenager: HookUpdateManager, id: string, value: Object, update: Function, history?: HookHistoryState) {
        this.hookMagenager = hookMagenager;
        this.id = id;
        this.valueObject = value;
        this.update = update;

        if (history) {
            this.history = history;
        }
    }

    setUpdate(object: Object) {
        if (this.history) {
            this.history.addState(object);
        }

        this.valueObject = object;
        this.update(object);
    }

    getBackValue() {

        if (this.history) {
            return this.history.getBackState();
        }
    }

    useState<T>(): [T, Function, Function, Function] {
        let propiedad: T = this.valueObject as any;
        return [propiedad, this.setUpdate.bind(this), this.value.bind(this), this.getBackValue.bind(this)];
    }

    value() {
        return this.valueObject;
    }
}

class HookHistoryStateManager {

}


class HookHistoryState {
    id: string;
    history: Object[];

    constructor(id: string) {
        this.id = id;
        this.history = [];
    }

    addState(value: Object) {
        console.log("add", this.history)
        if(this.getBack() != value){
            this.history.push(value);
        }
      
    }

    getBack() {
        if (this.history.length > 0) {
            let val = this.history[this.history.length - 1];
            return val;
        }
    }

    getBackState() {
        if (this.history.length > 0) {
            let val = this.history[this.history.length - 1];
            if(this.history.length > 1){
                this.history.pop();
            }
            console.log("delete", this.history)
            return val;
        }
    }
}