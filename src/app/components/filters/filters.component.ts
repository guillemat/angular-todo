import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() filterSelected = new EventEmitter();

  status: string[] = ['Ver Todas', 'Ver Completadas', 'Ver No Completadas'];
  currentStatus: string = 'Todas';

  constructor() { }

  ngOnInit(): void {
  }

  selectFilter(filter: string): void {
    this.currentStatus = filter;
    this.filterSelected.emit(this.currentStatus);
  }




}
