import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private _pageTitle = new BehaviorSubject<string>('Dashboard');
  title$ = this._pageTitle.asObservable();
  constructor() {}
  setTitle(title: string) {
    this._pageTitle.next(title);
  }
}
