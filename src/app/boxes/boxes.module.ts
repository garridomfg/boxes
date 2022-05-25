import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxGridComponent } from './pages/box-grid/box-grid.component';
import { BoxViewComponent } from './pages/box-view/box-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BoxGridComponent,
    BoxViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BoxGridComponent,
    BoxViewComponent
  ]
})
export class BoxesModule { }
