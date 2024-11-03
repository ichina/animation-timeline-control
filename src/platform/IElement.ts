export interface ISize {
  width: number;
  height: number;
}

export interface IRect extends ISize {
  x: number;
  y: number;
}

export interface IElementStyle {
  position?: string;
  width?: string | number;
  height?: string | number;
  overflow?: string;
  cursor?: string;
  padding?: string;
  cssText?: string;
  background?: string;
  minWidth?: string;
  minHeight?: string;
}

export interface IElement {
  // Properties
  clientWidth: number;
  clientHeight: number;
  offsetWidth: number;
  offsetHeight: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
  scrollHeight: number;
  style: IElementStyle;
  innerHTML: string;
  readonly classList: any;

  // Methods
  getBoundingClientRect(): IRect;
  appendChild(child: IElement): void;
  removeChild(child: IElement): void;
  addEventListener(type: string, listener: (event: any) => void, options?: boolean): void;
  removeEventListener(type: string, listener: (event: any) => void): void;
}

export interface ICanvasElement extends IElement {
  // Canvas specific properties
  width: number;
  height: number;

  // Canvas methods
  getContext(contextId: '2d'): any;
}
