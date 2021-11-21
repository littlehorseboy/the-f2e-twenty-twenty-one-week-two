import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaiwanBikeComponent } from './taiwan-bike.component';

const routes: Routes = [
  {
    path: '',
    component: TaiwanBikeComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaiwanBikeRoutingModule { }
