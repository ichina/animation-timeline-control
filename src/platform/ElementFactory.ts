// // src/platform/ElementFactory.ts
// // import { Platform } from 'react-native';
// import { WebElement, WebCanvasElement } from './element/WebElement';
// // import { MacOSElement, MacOSCanvasElement } from './macos/MacOSElement';
// import { IElement, ICanvasElement } from './IElement';

// type ElemType = ('div' | 'canvas') & string;

// type ElementType<T> = T extends 'canvas' ? ICanvasElement : IElement;

// export class ElementFactory {
//   static createElement<T extends ElemType>(t: T): ElementType<T> {
//     // if (Platform.OS === 'macos') {
//     //   if (!nativeView) {
//     //     throw new Error('Native view is required for macOS elements');
//     //   }
//     //   return type === 'canvas' ? new MacOSCanvasElement(nativeView) : new MacOSElement(nativeView);
//     // } else {
//     const element = document.createElement(t);
//     if (t === 'canvas') {
//       return new WebElement(element as HTMLElement) as IElement;
//     } else {
//       return new WebCanvasElement(element as HTMLCanvasElement) as ICanvasElement;
//     }

//     // }
//   }
// }
