import * as createjs from 'createjs-module';

class Firm {

    state: createjs.Stage;
    firmaShape: createjs.Shape;
    pressFirm: boolean;
    canvas: HTMLCanvasElement;

    constructor(width?: number, height?: number) {
        this.canvas = document.createElement("canvas");
        if (width) {
            this.canvas.width = width;
        }
        if (height) {
            this.canvas.height = height;
        }
        this.state = new createjs.Stage(this.canvas);
        this.firmaShape = new createjs.Shape();
        this.state.addChild(this.firmaShape);
        this.pressFirm = false;

        this.initStyleLine();


        this.state.on("stagemousedown", () => {
            this.pressFirm = true;
        });
        this.state.on("stagemouseup", () => {
            this.pressFirm = false;
        });

        this.state.on("stagemousemove", () => {

            if (this.pressFirm) {
                let graphics = this.firmaShape.graphics;

                graphics.lineTo(this.state.mouseX, this.state.mouseY);
                graphics.lineTo(this.state.mouseX, this.state.mouseY);

                this.state.update();
            }

        });
    }

    includeIn(element: HTMLElement) {
        element.append(this.canvas);
    }

    initStyleLine() {
        this.firmaShape.graphics.setStrokeStyle(3).beginStroke("gray");
    }

    clearCanvas() {
        this.firmaShape.graphics.clear();
        this.initStyleLine();
        this.state.update();
    }

    update() {
        this.state.update();
    }

    getImage(load: Function) {
        this.canvas.toBlob((data) => {
            if(data){
                load(data);
            }
            
        });
    }
}

export default Firm;

export function b64toBlob(b64Data: string, contentType?: string, sliceSize?: number) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
}