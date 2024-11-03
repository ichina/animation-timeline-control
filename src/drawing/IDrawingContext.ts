export interface Point {
  x: number;
  y: number;
}

export interface PointInit {
  w?: number;
  x?: number;
  y?: number;
  z?: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface DrawingStyle {
  fillStyle?: string;
  strokeStyle?: string;
  lineWidth?: number;
  font?: string;
  lineDash?: number[];
}

export interface IDrawingContext {
  // State management
  save(): void;
  restore(): void;
  // Style setters
  setStyle(style: DrawingStyle): void;

  // Path operations
  beginPath(): void;
  closePath(): void;

  // Drawing operations
  clear(rect?: Rect): void;
  fillRect(rect: Rect): void;
  strokeRect(rect: Rect): void;
  rect(rect: Rect): void;
  drawLine(from: Point, to: Point): void;
  drawCircle(center: Point, radius: number): void;
  drawRoundedRect(rect: Rect, radius: number | number[]): void;
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;

  // Path filling/stroking
  fill(): void;
  stroke(): void;
  clip(): void;

  // Text operations
  fillText(text: string, position: Point): void;
  measureText(text: string): Size;

  // Transformations
  translate(x: number, y: number): void;
  rotate(angle: number): void;
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;

  moveTo(x: number, y: number): void;

  lineTo(x: number, y: number): void;

  // Properties
  readonly width: number;
  readonly height: number;
  readonly pixelRatio: number;
}
