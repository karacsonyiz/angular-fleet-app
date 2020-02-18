import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/service/base.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.baseService.query('fuelings', '_expand=vehicle&_expand=driver')
    .then(
      data => console.log(data),
      err => console.error(err)
    );
  }

}
