import { Injectable } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { map, takeUntil, mergeMap, tap, throttleTime } from 'rxjs/operators';
import { Vec2 } from 'src/app/shared/models/vec2.interface';

@Injectable({
  providedIn: 'root'
})
export class DragService {

  constructor() { }

  getDrop(htmlElement): Observable<null> {
    return merge(
      fromEvent(htmlElement, 'mouseup').pipe(map((e: MouseEvent) => null)),
      fromEvent(htmlElement, 'touchend').pipe(map((e: TouchEvent) => null)),
    );
  }

  getLeave(htmlElement): Observable<null> {
    // does not need touchleave, handled by touchend
    return fromEvent(htmlElement, 'mouseleave').pipe(map((e: MouseEvent) => null));
  }

  getDrag(htmlElement): Observable<Vec2 | null> {
    const move$ = merge(
      fromEvent(htmlElement, 'mousemove').pipe(map((e: MouseEvent) => this.mouseToVec2(e))),
      fromEvent(htmlElement, 'touchmove').pipe(map((e: TouchEvent) => this.touchToVec2(e))),
    );
    const down$ = merge(
      fromEvent(htmlElement, 'mousedown').pipe(map((e: MouseEvent) => this.mouseToVec2(e))),
      fromEvent(htmlElement, 'touchstart').pipe(map((e: TouchEvent) => this.touchToVec2(e))),
    );

    return down$.pipe(
      mergeMap(down => move$.pipe(
        takeUntil(this.getDrop(htmlElement)),
        takeUntil(this.getLeave(htmlElement))
      ))
    ).pipe(throttleTime(20)); // reduce amount of events for slow mobile
  }

  getStop(htmlElement): Observable<null> {
    return merge(this.getDrop(htmlElement), this.getLeave(htmlElement));
  }

  mouseToVec2(event: MouseEvent): Vec2 {
    return { x: event.clientX, y: event.clientY };
  }

  // track only first finger
  touchToVec2(event: TouchEvent): Vec2 | null {
    // if no finger touching
    if (event.touches.length === 0) {
      return null;
    }
    return { x: event.touches[0].clientX, y: event.touches[0].clientY };
  }

}
