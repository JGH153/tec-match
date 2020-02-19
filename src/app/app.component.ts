import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { fadeAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'TecMatch';

  ngOnInit() {
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    fromEvent(window, 'resize')
      .pipe(debounceTime(150))
      .subscribe({
        next: () => {
          this.updateVh();
        }
      });
    this.updateVh();
  }

  updateVh() {
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh1', `${vh}px`);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
