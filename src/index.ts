
export default class SimpleCanvas {
    constructor(container: string | HTMLElement) {
        let containerElement: HTMLElement;
        if (typeof container == "string")
            containerElement = document.getElementById(container);
        else
            containerElement = container;

        if (containerElement.tagName == "CANVAS") {
            this.mainCanvas = containerElement as HTMLCanvasElement;
        }
        else {
            this.mainCanvas = document.createElement("canvas");
            var dimmentions = containerElement.getBoundingClientRect()
            this.mainCanvas.width = dimmentions.width;
            this.mainCanvas.height = dimmentions.height;
        }
        this.mainContext = this.mainCanvas.getContext("2d");
    }

    //#region Member variables

    mainCanvas: HTMLCanvasElement;
    mainContext: CanvasRenderingContext2D;
    tempCanvas: HTMLCanvasElement = null;
    tempContext: CanvasRenderingContext2D = null;

    //#endregion

    drawRect(x: number, y: number, width: number, height: number, strokeColor: string = "black", lineWidth: number = 1, fillColor: string = "", alpha: number = 1) {
        var context = this.mainContext;
        context.globalAlpha = alpha;
        if (fillColor) {
            context.fillStyle = fillColor;
            context.fillRect(x, y, width, height);
        }
        if (lineWidth) {
            context.strokeStyle = strokeColor;
            context.lineWidth = lineWidth;
            context.strokeRect(x, y, width, height);
        }
    }
    drawLine(x1: number, y1: number, x2: number, y2: number, color: string = "black", lineWidth: number = 1, alpha: number = 1) {
        var context = this.mainContext;
        context.globalAlpha = alpha;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        if (lineWidth) {
            context.strokeStyle = color;
            context.lineWidth = lineWidth;
            context.stroke();
        }
    }
    drawCircle(x: number, y: number, radius: number, strokeColor: string = "black", lineWidth: number = 1, fillColor: string = "", alpha: number = 1) {
        var context = this.mainContext;
        context.beginPath();
        context.lineWidth = lineWidth;
        context.globalAlpha = alpha;
        context.arc(x, y, radius, 0, Math.PI * 2, true);
        context.closePath();
        if (lineWidth) {
            context.strokeStyle = strokeColor;
            context.stroke();
        }
        if (fillColor) {
            context.fillStyle = fillColor;
            context.fill();
        }
    }
    drawImage(src: string, x: number, y: number, width: number, height: number, alpha: number = 1) {
        var context = this.mainContext;
        var img = new Image();
        img.src = src;
        context.globalAlpha = alpha;
        img.onload = function () {
            context.drawImage(img, x, y, width, height);
        };
    }
}
