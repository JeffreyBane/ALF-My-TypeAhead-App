import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';

const routes: Routes = [

  {
    path: 'TypeAhead',
    component: TypeAheadComponent
  },
  {
    path: 'DetailPage',
    component: DetailPageComponent
  },
  { path: '',   
    redirectTo: '/TypeAhead', 
    pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }