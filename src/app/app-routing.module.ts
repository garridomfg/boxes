import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxGridComponent } from './boxes/pages/box-grid/box-grid.component';
import { BoxViewComponent } from './boxes/pages/box-view/box-view.component';

const routes: Routes = [
  {
    path: 'boxes',
    component: BoxGridComponent,
  },
  {
    path: 'box/:id',
    component: BoxViewComponent
  },
  {
    path: '**',
    redirectTo: 'boxes'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
