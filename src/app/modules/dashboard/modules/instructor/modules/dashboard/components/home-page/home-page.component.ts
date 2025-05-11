import { Component, effect, inject, OnInit } from '@angular/core';
import { HomepageService } from '../../services/homepage.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { IUpcomingQuizzes } from '../../models/upcoming-5-quizzes.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  private _homePageSerivce = inject(HomepageService);
  quizzesSignal = toSignal(this._homePageSerivce.getUpcomingQuizzes(), {
    initialValue: [] as IUpcomingQuizzes[],
  });
constructor(){
   effect(() => {
      console.log('Upcoming Quizzes: ', this.quizzesSignal());
    });
}
  ngOnInit(): void {
   
  }
}
