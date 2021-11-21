import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaiwanBikeRoutingModule } from './taiwan-bike-routing.module';
import { TaiwanBikeComponent } from './taiwan-bike.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    TaiwanBikeComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    TaiwanBikeRoutingModule
  ]
})
export class TaiwanBikeModule { }
