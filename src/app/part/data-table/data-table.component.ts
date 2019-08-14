import { Component, OnInit, Input } from '@angular/core';
import { BaseService } from '../../service/base.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() list: any[];
  @Input() cols: any[];

  deleteIconClass: string = 'fa fa-trash';

  constructor(private BaseService: BaseService) { }

  ngOnInit() { 
  }

  onUpdate(event): void {
    alert("Update btn clicked")
  }

  onDelete($event): void {
    alert(`${$event} button clicked`)
  }

  

}
