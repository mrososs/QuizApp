import { Component, inject } from '@angular/core';
import { PageTitleService } from '../../../services/pageTitle.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private _pageTitleService = inject(PageTitleService);
  title = this._pageTitleService.title$;


  userName: string = '';
  userRole: string = '';
  constructor() {
    this.profileNav()
  }
profileNav(){
  const userProfile = localStorage.getItem('userProfile');
  if (userProfile) {
    const user = JSON.parse(userProfile);
    this.userName = user.first_name + ' ' + user.last_name;
    this.userRole = user.role;
  }
}

logout() {
  localStorage.clear();
  window.location.reload();
}
}