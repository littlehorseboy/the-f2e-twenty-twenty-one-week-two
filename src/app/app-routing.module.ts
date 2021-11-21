import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'taiwan-bike', loadChildren: () => import('./taiwan-bike/taiwan-bike.module').then(m => m.TaiwanBikeModule) },
  { path: '', redirectTo: 'taiwan-bike', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
