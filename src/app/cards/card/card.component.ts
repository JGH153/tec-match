import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Card } from 'src/app/shared/models/card.interface';
import { fromEvent, merge, Subscription } from 'rxjs';
import { mergeMap, takeUntil, tap, map } from 'rxjs/operators';
import { Vec2 } from 'src/app/shared/models/vec2.interface';
import { DragService } from '../services/drag.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() card: Card;

  // bool is like
  @Output() cardDone = new EventEmitter<boolean>();

  @ViewChild('myCard') myCard;

  rot = 0;
  offsetX = 0;
  offsetY = 0;
  lastEventX = -1;
  lastEventY = -1;
  cardOverThreshold = false;

  dragThreshold = 50;
  dragSpeedAuto = 30;
  acceleration = 1.15;

  subscriptions = new Subscription();

  constructor(
    private dragService: DragService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.subscriptions.add(
      this.dragService.getDrag(this.myCard.nativeElement).subscribe({
        next: (move: Vec2) => this.onCardDrag(move)
      })
    );

    this.subscriptions.add(
      this.dragService.getStop(this.myCard.nativeElement).subscribe({
        next: () => this.onCardStop()
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onCardDrag(move: Vec2) {
    console.log('move');
    if (this.lastEventX < 0) {
      this.lastEventX = move.x;
      this.lastEventY = move.y;
    }
    this.moveCard(move.x - this.lastEventX, move.y - this.lastEventY);
    this.lastEventX = move.x;
    this.lastEventY = move.y;
  }

  // drop and leave
  onCardStop() {
    this.unsetLastEvent();
    if (Math.abs(this.offsetX) > this.dragThreshold) {
      if (this.offsetX < 0) {
        this.trowDislike();
      } else {
        this.throwLike();
      }
    } else {
      this.offsetX = 0;
      this.offsetY = 0;
      this.cardOverThreshold = false;
      this.updateCardCssVars();
    }
  }

  throwLike() {
    this.cardOverThreshold = true;
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
    this.cardOverThreshold = true;
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
      this.cardOverThreshold = true;
    } else if (this.offsetX > this.dragThreshold) {
      this.myCard.nativeElement.style.setProperty('background', 'var(--color-green)');
      this.cardOverThreshold = true;
    } else {
      this.myCard.nativeElement.style.setProperty('background', 'var(--color-background)');
      this.cardOverThreshold = false;
    }

    // to slow on mobile. can improve?
    this.myCard.nativeElement.style.setProperty('--offsetX', this.offsetX + 'px');
    this.myCard.nativeElement.style.setProperty('--offsetY', this.offsetY + 'px');
  }

}
