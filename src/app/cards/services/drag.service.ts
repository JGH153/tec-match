import { Injectable } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map, takeUntil, mergeMap, tap, throttleTime } from 'rxjs/operators';
import { Vec2 } from 'src/app/shared/models/vec2.interface';

@Injectable({
  providedIn: 'root'
})
export class DragService {

  constructor() { }

  getCardDrop(cardHtmlElement) {
    return merge(
      fromEvent(cardHtmlElement, 'mouseup').pipe(map((e: MouseEvent) => null)),
      fromEvent(cardHtmlElement, 'touchend').pipe(map((e: TouchEvent) => null)),
    );
  }

  getCardLeave(cardHtmlElement) {
    // does not need touchleave, handled by touchend
    return fromEvent(cardHtmlElement, 'mouseleave').pipe(map((e: MouseEvent) => null));
  }

  getCardDrag(cardHtmlElement) {
    const move$ = merge(
      fromEvent(cardHtmlElement, 'mousemove').pipe(map((e: MouseEvent) => this.mouseToVec2(e))),
      fromEvent(cardHtmlElement, 'touchmove').pipe(map((e: TouchEvent) => this.touchToVec2(e))),
    );
    const down$ = merge(
      fromEvent(cardHtmlElement, 'mousedown').pipe(map((e: MouseEvent) => this.mouseToVec2(e))),
      fromEvent(cardHtmlElement, 'touchstart').pipe(map((e: TouchEvent) => this.touchToVec2(e))),
    );

    return down$.pipe(
      mergeMap(down => move$.pipe(takeUntil(this.getCardDrop(cardHtmlElement)), takeUntil(this.getCardLeave(cardHtmlElement))))
    ).pipe(throttleTime(40)); // reduce amount of events for slow mobile
  }

  getCardStop(cardHtmlElement) {
    return merge(this.getCardDrop(cardHtmlElement), this.getCardLeave(cardHtmlElement));
  }

  mouseToVec2(event: MouseEvent): Vec2 {
    return { x: event.clientX, y: event.clientY };
  }

  // track only first finger
  touchToVec2(event: TouchEvent): Vec2 | null {
    if (event.touches.length === 0) {
      return null;
    }
    return { x: event.touches[0].clientX, y: event.touches[0].clientY };
  }

}
