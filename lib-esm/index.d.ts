export default class SimpleCanvas {
    constructor(container: string | HTMLElement);
    mainCanvas: HTMLCanvasElement;
    mainContext: CanvasRenderingContext2D;
    tempCanvas: HTMLCanvasElement;
    tempContext: CanvasRenderingContext2D;
    drawRect(x: number, y: number, width: number, height: number, strokeColor?: string, lineWidth?: number, fillColor?: string, alpha?: number): void;
    drawLine(x1: number, y1: number, x2: number, y2: number, color?: string, lineWidth?: number, alpha?: number): void;
    drawCircle(x: number, y: number, radius: number, strokeColor?: string, lineWidth?: number, fillColor?: string, alpha?: number): void;
    drawImage(src: string, x: number, y: number, width: number, height: number, alpha?: number): void;
}
