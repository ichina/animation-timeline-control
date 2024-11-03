import { TimelineKeyframeViewModel } from './timelineKeyframeViewModel';
import { TimelineRowViewModel } from './timelineRowViewModel';
import { Rect } from '../drawing/IDrawingContext';
export interface TimelineViewModel {
  /**
   * Screen coordinates of the element.
   */
  size: Rect;
  /**
   * Keyframes view models.
   */
  keyframesViewModels: TimelineKeyframeViewModel[];
  /**
   * Collection of the rows sizes.
   */
  rowsViewModels: TimelineRowViewModel[];

  min: number | null;
  max: number | null;
}
