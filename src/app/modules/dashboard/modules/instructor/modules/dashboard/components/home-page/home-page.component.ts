import { Component, inject, OnInit } from '@angular/core';
import { HomepageService } from '../../services/homepage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  private _homePageSerivce = inject(HomepageService);
  ngOnInit(): void {
    this._homePageSerivce.getUpcomingQuizzes().subscribe((res) => {
      console.log(res);
    });
  }
}
