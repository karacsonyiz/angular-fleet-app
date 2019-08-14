import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseService } from './service/base.service';
import { ConfigService } from './service/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fleet-manager';
  driver: any = {};
  cols: any = [];
  listSubscription: Subscription;

  constructor(
    private BaseService: BaseService,
    private configService: ConfigService
  ){

  }

  ngOnInit() {
    this.cols = this.configService.cols.drivers
    this.listSubscription = this.BaseService.getAll('drivers')
    .subscribe(
      list => this.driver = list,
      err => console.error(err),
      () => console.log('unsubscribed'));
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }
}
