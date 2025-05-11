import { Component, Input, OnInit } from '@angular/core';
import { ITopStudents } from '../../../models/topStudents.model';

@Component({
  selector: 'app-top-five-stuents-card',
  templateUrl: './top-five-stuents-card.component.html',
  styleUrls: ['./top-five-stuents-card.component.css']
})
export class TopFiveStuentsCardComponent implements OnInit {
  @Input() student!: ITopStudents;

  constructor() { }

  ngOnInit() {
  }

}
