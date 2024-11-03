import { IDrawingContext, DrawingStyle, Point, Size, Rect } from './IDrawingContext';

export class WebDrawingContext implements IDrawingContext {
  private ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Could not get 2D context');
    }
    this.ctx = context;
  }

  save(): void {
    this.ctx.save();
  }

  restore(): void {
    this.ctx.restore();
  }

  setStyle(style: DrawingStyle): void {
    if (style.fillStyle !== undefined) {
      this.ctx.fillStyle = style.fillStyle;
    }
    if (style.strokeStyle !== undefined) {
      this.ctx.strokeStyle = style.strokeStyle;
    }
    if (style.lineWidth !== undefined) {
      this.ctx.lineWidth = style.lineWidth;
    }
    if (style.font !== undefined) {
      this.ctx.font = style.font;
    }
    if (style.lineDash !== undefined) {
      this.ctx.setLineDash(style.lineDash);
    }
  }

  beginPath(): void {
    this.ctx.beginPath();
  }

  closePath(): void {
    this.ctx.closePath();
  }

  clear(rect?: Rect): void {
    if (rect) {
      this.ctx.clearRect(rect.x, rect.y, rect.width, rect.height);
    } else {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  fillRect(rect: Rect): void {
    this.ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
  }

  strokeRect(rect: Rect): void {
    this.ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
  }

  rect(rect: Rect): void {
    this.ctx.rect(rect.x, rect.y, rect.width, rect.height);
  }

  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void {
    this.ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  }

  drawLine(from: Point, to: Point): void {
    this.ctx.beginPath();
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();
  }

  drawCircle(center: Point, radius: number): void {
    this.ctx.beginPath();
    this.ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
  }

  drawRoundedRect(rect: Rect, radius: number | number[]): void {
    const radii = Array.isArray(radius) ? radius : [radius, radius, radius, radius];
    this.ctx.beginPath();
    this.ctx.roundRect(rect.x, rect.y, rect.width, rect.height, radii);
  }

  drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void {
    this.ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  }

  fill(): void {
    this.ctx.fill();
  }

  stroke(): void {
    this.ctx.stroke();
  }

  clip(): void {
    this.ctx.clip();
  }

  fillText(text: string, position: Point): void {
    this.ctx.fillText(text, position.x, position.y);
  }

  measureText(text: string): Size {
    const metrics = this.ctx.measureText(text);
    return {
      width: metrics.width,
      height: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent,
    };
  }

  translate(x: number, y: number): void {
    this.ctx.translate(x, y);
  }

  rotate(angle: number): void {
    this.ctx.rotate(angle);
  }

  moveTo(x: number, y: number): void {
    this.ctx.moveTo(x, y);
  }

  lineTo(x: number, y: number): void {
    this.ctx.lineTo(x, y);
  }

  get width(): number {
    return this.ctx.canvas.width;
  }

  get height(): number {
    return this.ctx.canvas.height;
  }

  get pixelRatio(): number {
    return window.devicePixelRatio || 1;
  }

  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void {
    this.ctx.setTransform(a, b, c, d, e, f);
  }

  get lineWidth(): number {
    return this.ctx.lineWidth;
  }

  set lineWidth(width: number) {
    this.ctx.lineWidth = width;
  }
}
