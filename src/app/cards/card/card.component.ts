import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card.interface';
import { fromEvent, merge } from 'rxjs';
import { mergeMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {

  @Input() card: Card;

  // bool is like
  @Output() cardDone = new EventEmitter<boolean>();

  @ViewChild('myCard') myCard;

  rot = 0;
  offsetX = 0;
  offsetY = 0;
  lastEventX = -1;
  lastEventY = -1;
  cardMoving = false;

  dragThreshold = 50;
  dragSpeedAuto = 30;
  acceleration = 1.15;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const move$ = fromEvent(this.myCard.nativeElement, 'mousemove');
    const down$ = fromEvent(this.myCard.nativeElement, 'mousedown');
    const up$ = fromEvent(this.myCard.nativeElement, 'mouseup').pipe(tap(() => this.unsetLastEvent()));
    const leave$ = fromEvent(this.myCard.nativeElement, 'mouseleave').pipe(tap(() => this.unsetLastEvent()));

    // add lastEventX inside mergeMap somehow
    const mouseDrag$ = down$.pipe(
      mergeMap(down => move$.pipe(takeUntil(up$), takeUntil(leave$)))
    );

    const stop$ = merge(up$, leave$);

    mouseDrag$.subscribe({
      next: (move: MouseEvent) => {
        if (this.lastEventX < 0) {
          this.lastEventX = move.clientX;
          this.lastEventY = move.clientY;
          this.cardMoving = true;
        }
        this.moveCard(move.clientX - this.lastEventX, move.clientY - this.lastEventY);
        this.lastEventX = move.clientX;
        this.lastEventY = move.clientY;
      }
    });

    stop$.subscribe({
      next: () => {
        if (Math.abs(this.offsetX) > this.dragThreshold) {
          if (this.offsetX < 0) {
            this.trowDislike();
          } else {
            this.throwLike();
          }
        } else {
          this.offsetX = 0;
          this.offsetY = 0;
          this.cardMoving = false;
        }
      }
    });
  }

  throwLike() {
    this.cardMoving = true;
    if (this.offsetX > this.dragThreshold * 15) {
      this.like();
      return;
    }
    this.offsetX += this.dragSpeedAuto;
    this.dragSpeedAuto *= this.acceleration;
    this.updateCardCssVars();
    requestAnimationFrame(() => {
      this.throwLike();
    });
  }

  trowDislike() {
    this.cardMoving = true;
    if (this.offsetX < -this.dragThreshold * 15) {
      this.dislike();
      return;
    }
    this.offsetX -= this.dragSpeedAuto;
    this.dragSpeedAuto *= this.acceleration;
    this.updateCardCssVars();
    requestAnimationFrame(() => {
      this.trowDislike();
    });
  }

  unsetLastEvent() {
    this.lastEventX = -1;
    this.lastEventY = -1;
    this.updateCardCssVars();
  }

  dislike() {
    this.cardDone.emit(false);
  }

  like() {
    this.cardDone.emit(true);
  }

  moveCard(changeX, changeY) {
    this.offsetX += changeX;
    this.offsetY += changeY;

    this.updateCardCssVars();
  }

  updateCardCssVars() {
    if (this.offsetX < -this.dragThreshold) {
      this.myCard.nativeElement.style.setProperty('background', 'var(--color-red)');
    } else if (this.offsetX > this.dragThreshold) {
      this.myCard.nativeElement.style.setProperty('background', 'var(--color-green)');
    } else {
      this.myCard.nativeElement.style.setProperty('background', 'var(--color-blue)');
    }
    this.myCard.nativeElement.style.setProperty('--offsetX', this.offsetX + 'px');
    this.myCard.nativeElement.style.setProperty('--offsetY', this.offsetY + 'px');
  }

}
