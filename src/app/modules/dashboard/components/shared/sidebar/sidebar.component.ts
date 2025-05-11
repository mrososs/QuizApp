import { Component, inject } from '@angular/core';
import { PageTitleService } from '../../../services/pageTitle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
private _pageTitleService = inject(PageTitleService);
setPageTitle(title:string){
  this._pageTitleService.setTitle(title);
}
}
