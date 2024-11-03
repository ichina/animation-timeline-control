// src/platform/web/WebElement.ts
import { ICanvasElement, IElement, IElementStyle, IRect } from '../IElement';

export class WebElement implements IElement {
  protected element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  get clientWidth(): number {
    return this.element.clientWidth;
  }

  get clientHeight(): number {
    return this.element.clientHeight;
  }

  get offsetWidth(): number {
    return this.element.offsetWidth;
  }

  get offsetHeight(): number {
    return this.element.offsetHeight;
  }

  get scrollLeft(): number {
    return this.element.scrollLeft;
  }

  set scrollLeft(value: number) {
    this.element.scrollLeft = value;
  }

  get scrollTop(): number {
    return this.element.scrollTop;
  }

  set scrollTop(value: number) {
    this.element.scrollTop = value;
  }

  get scrollWidth(): number {
    return this.element.scrollWidth;
  }

  get scrollHeight(): number {
    return this.element.scrollHeight;
  }

  get style(): IElementStyle {
    return this.element.style as unknown as IElementStyle;
  }

  set style(value: IElementStyle) {
    Object.assign(this.element.style, value);
  }

  get innerHTML(): string {
    return this.element.innerHTML;
  }

  set innerHTML(value: string) {
    this.element.innerHTML = value;
  }

  // DOMTokenList
  get classList(): any {
    return this.element.classList;
  }

  getBoundingClientRect(): IRect {
    const rect = this.element.getBoundingClientRect();
    return {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    };
  }

  appendChild(child: IElement): void {
    this.element.appendChild((child as WebElement).getNativeElement());
  }

  removeChild(child: IElement): void {
    this.element.removeChild((child as WebElement).getNativeElement());
  }

  addEventListener(type: string, listener: (event: any) => void, options?: boolean): void {
    this.element.addEventListener(type, listener, options);
  }

  removeEventListener(type: string, listener: (event: any) => void): void {
    this.element.removeEventListener(type, listener);
  }

  getNativeElement(): HTMLElement {
    return this.element;
  }
}

export class WebCanvasElement extends WebElement implements ICanvasElement {
  protected declare element: HTMLCanvasElement;

  constructor(element: HTMLCanvasElement) {
    super(element);
  }

  get width(): number {
    return this.element.width;
  }

  set width(value: number) {
    this.element.width = value;
  }

  get height(): number {
    return this.element.height;
  }

  set height(value: number) {
    this.element.height = value;
    this.element.getBoundingClientRect().left;
  }

  getContext(contextId: '2d'): CanvasRenderingContext2D | null {
    return this.element.getContext(contextId);
  }
}
