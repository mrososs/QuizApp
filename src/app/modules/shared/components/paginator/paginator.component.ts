import { Component, EventEmitter, Input, Output} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  standalone: false,
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss' ,

})
export class PaginatorComponent {

  @Input() length :number = 30;
  @Input()  pageSize = 10;
  @Input()  pageIndex = 0;
  @Output() pageChange = new EventEmitter<PageEvent>();


  pageSizeOptions = [5,7, 10, 15 , 25];
  hidePageSize = true;
  showPageSizeOptions = false;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageChange.emit(e); // Emit event to parent
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

  }

    setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}

