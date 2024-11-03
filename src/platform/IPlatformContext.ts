import { IElement } from './IElement';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IEventSubscription {
  remove(): void;
}

export interface IEventListener {
  (event: any): void;
}

export type PlatformEventType = 'resize' | 'blur' | 'keyup' | 'keydown' | 'mousemove' | 'mouseup' | 'touchmove' | 'touchend';

export interface ITimer {
  clear(): void;
}

export interface IPlatformContext {
  // Element creation and querying
  getElementById(id: string): IElement | null;
  createElement(tagName: string): IElement | null;

  // Event handling
  addEventListener(type: PlatformEventType, listener: IEventListener): IEventSubscription;
  removeEventListener(type: PlatformEventType, listener: IEventListener): void;

  // Timing functions
  setTimeout(callback: () => void, ms: number): ITimer;
  setInterval(callback: () => void, ms: number): ITimer;

  // Screen metrics
  getScreenScale(): number;
  getViewportSize(): { width: number; height: number };

  // Browser selection
  clearSelection(): void;

  // Platform detection
  isControlKeyMetaKey(): boolean;

  // Add requestAnimationFrame abstraction
  requestAnimationFrame(callback: (timestamp: number) => void): number;
}
