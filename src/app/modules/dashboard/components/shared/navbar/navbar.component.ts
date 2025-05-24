import { Component, inject } from '@angular/core';
import { PageTitleService } from '../../../services/pageTitle.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private _pageTitleService = inject(PageTitleService);
  private _dialog = inject(MatDialog);

  title = this._pageTitleService.title$;

  userName: string = '';
  userRole: string = '';
  constructor() {
    this.profileNav();
  }
  profileNav() {
    const userProfile = localStorage.getItem('userProfile');
    if (userProfile) {
      const user = JSON.parse(userProfile);
      this.userName = user.first_name + ' ' + user.last_name;
      this.userRole = user.role;
    }
  }

  logout() {
    const dialogRef = this._dialog.open(LogoutDialogComponent, {
      width: '400px',
      data: { code: 'Are you want to logout ?' },
    });
  }
}
