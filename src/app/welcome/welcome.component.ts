import { Component, OnInit } from '@angular/core';
import { Pages } from '../shared/models/pages.enum';
import { Router } from '@angular/router';
import { CardsService } from '../core/services/cards.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  numQuestion = 0;

  constructor(
    private router: Router,
    private cardsService: CardsService,
  ) { }

  ngOnInit(): void {
    this.numQuestion = this.cardsService.cards.length;
    this.preLoadImages();
  }

  start() {
    this.router.navigate([Pages.Cards]);
  }

  preLoadImages() {
    const paths = new Array(
      'assets/loading.gif',
    );

    const images = new Array();

    paths.forEach(currentImgPath => {
      const image = new Image();
      image.src = currentImgPath;
      images.push(image);
    });
  }

}
