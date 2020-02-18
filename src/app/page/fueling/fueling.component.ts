import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { BaseService } from 'src/app/service/base.service';
import { ConfigService } from 'src/app/service/config.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-fueling',
  templateUrl: './fueling.component.html',
  styleUrls: ['./fueling.component.css']
})
export class FuelingComponent extends Base {

  constructor(baseService: BaseService, configService : ConfigService) { 
    super(baseService, configService, 'fuelings');
  }

  ngOnInit() {  
    let driverObservable = this.BaseService.getAll('drivers');
    let vehicleObservable = this.BaseService.getAll('vehicles');
    zip(driverObservable,vehicleObservable).subscribe(
      valueList =>{
        console.log(valueList);
        this.cols = this.configService.cols[this.dataType];
      } 
    );
    

    // Get self data list
    this.listSubscription = this.BaseService.getAll(this.dataType)
    .subscribe(
      list => this.list = list,
      err => console.error(err),
      () => console.log('unsubscribed'))
  }

  processOptions(list): any[]{

    
    return null;
  }

}
