// src/platform/PlatformContextFactory.ts
import { IPlatformContext } from './IPlatformContext';
import { WebPlatformContext } from './WebPlatformContext';

export class PlatformContextFactory {
  private static instance: IPlatformContext;

  static getInstance(): IPlatformContext {
    if (!PlatformContextFactory.instance) {
      PlatformContextFactory.instance = new WebPlatformContext();
    }
    return PlatformContextFactory.instance;
  }
}
