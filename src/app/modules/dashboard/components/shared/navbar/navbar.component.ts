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
}
