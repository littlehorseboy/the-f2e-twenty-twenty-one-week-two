import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { IndexComponent } from './index/index.component';
import { TaiwanBikeRoutingModule } from './taiwan-bike-routing.module';
import { TaiwanBikeComponent } from './taiwan-bike.component';

@NgModule({
  declarations: [
    TaiwanBikeComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    TaiwanBikeRoutingModule,
    ButtonModule,
    ToolbarModule,
  ]
})
export class TaiwanBikeModule { }
