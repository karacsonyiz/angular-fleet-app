import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigService } from '../service/config.service';
import { BaseService } from '../service/base.service';

export class Base implements OnInit, OnDestroy {
    list: any = {};
    cols: any = [];
    listSubscription: Subscription;
  
    constructor(
      protected BaseService: BaseService,
      protected configService: ConfigService,
      public dataType: string
    ){
  
    }
  
    ngOnInit() {
      this.cols = this.configService.cols[this.dataType]
      this.listSubscription = this.BaseService.getAll(this.dataType)
      .subscribe(
        list => this.list = list,
        err => console.error(err),
        () => console.log('unsubscribed'));
    }
  
    ngOnDestroy() {
      this.listSubscription.unsubscribe();
    }
  
    onCreate(row: any): void {
      this.BaseService.create(this.dataType, row);
    }
  
    onUpdate(row: any): void {
      this.BaseService.update(this.dataType, row);
    }
  
    onDelete(row: any): void {
      this.BaseService.delete(this.dataType, row);
    }
    
  }
