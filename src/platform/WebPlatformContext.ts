// src/platform/WebPlatformContext.ts
import { IPlatformContext, IEventSubscription, IEventListener, PlatformEventType, ITimer } from './IPlatformContext';

export class WebPlatformContext implements IPlatformContext {
  getElementById(id: string): HTMLElement | null {
    return document.getElementById(id);
  }

  createElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  addEventListener(type: PlatformEventType, listener: IEventListener): IEventSubscription {
    const target = this.getEventTarget(type);
    target.addEventListener(type, listener);

    return {
      remove: () => {
        target.removeEventListener(type, listener);
      },
    };
  }

  removeEventListener(type: PlatformEventType, listener: IEventListener): void {
    const target = this.getEventTarget(type);
    target.removeEventListener(type, listener);
  }

  setTimeout(callback: () => void, ms: number): ITimer {
    const id = window.setTimeout(callback, ms);
    return {
      clear: () => window.clearTimeout(id),
    };
  }

  setInterval(callback: () => void, ms: number): ITimer {
    const id = window.setInterval(callback, ms);
    return {
      clear: () => window.clearInterval(id),
    };
  }

  getScreenScale(): number {
    return window.devicePixelRatio || 1;
  }

  getViewportSize(): { width: number; height: number } {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  clearSelection(): void {
    if (!window) {
      return;
    }
    if (window.getSelection) {
      const selection = window.getSelection();
      selection?.removeAllRanges();
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const doc: any = window.document;
      if (doc.selection) {
        doc.selection.empty();
      }
    }
  }

  isControlKeyMetaKey(): boolean {
    return navigator.platform.toLowerCase().indexOf('mac') >= 0;
  }

  private getEventTarget(type: PlatformEventType): EventTarget {
    // Window events
    const windowEvents: PlatformEventType[] = ['resize', 'blur', 'mousemove', 'mouseup', 'touchmove', 'touchend'];

    // Document events
    const documentEvents: PlatformEventType[] = ['keyup', 'keydown'];

    if (windowEvents.includes(type)) {
      return window;
    } else if (documentEvents.includes(type)) {
      return document;
    }

    return document;
  }

  requestAnimationFrame(callback: (timestamp: number) => void): number {
    return window.requestAnimationFrame(callback);
  }
}
