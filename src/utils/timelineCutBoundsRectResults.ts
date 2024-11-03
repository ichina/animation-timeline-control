import type { Rect } from '../drawing/IDrawingContext';

/**
 * Helper container. Cut bounds method results.
 */
export interface TimelineCutBoundsRectResults {
  rect: Rect;
  overlapY: boolean;
  overlapX: boolean;
}
