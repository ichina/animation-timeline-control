import { TimelinePoint } from '../timelinePoint';
import { TimelineBaseEvent } from './timelineBaseEvent';
import { TimelineElementDragState } from '../timelineElementDragState';
import type { Point } from '../../drawing/IDrawingContext';

export class TimelineDragEvent extends TimelineBaseEvent {
  args: MouseEvent | TouchEvent | null = null;
  get pos(): Point | null {
    return this.point?.pos || null;
  }
  /**
   * Elements to be dragged as a group.
   */
  elements: TimelineElementDragState[] | null = null;
  /**
   * Target element
   */
  target: TimelineElementDragState | null = null;
  /**
   * Timeline current active drag position.
   */
  point: TimelinePoint | null = null;
  /**
   * Timeline previous drag position.
   */
  prevPoint: TimelinePoint | null = null;
}
