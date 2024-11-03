// import { Platform } from 'react-native';
import { IDrawingContext } from './IDrawingContext';
import { WebDrawingContext } from './WebDrawingContext';
// import { MacOSDrawingContext } from './MacOSDrawingContext';

export class DrawingContextFactory {
  static create(view: unknown /*, width: number, height: number*/): IDrawingContext {
    // if (Platform.OS === 'macos') {
    //   return new MacOSDrawingContext(view, width, height);
    // } else {
    return new WebDrawingContext(view as HTMLCanvasElement);
    // }
  }
}
