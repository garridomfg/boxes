import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxGridComponent } from './pages/box-grid/box-grid.component';
import { BoxViewComponent } from './pages/box-view/box-view.component';
import { RouterModule } from '@angular/router';
import { WonItemComponent } from './components/won-item/won-item.component';



@NgModule({
  declarations: [
    BoxGridComponent,
    BoxViewComponent,
    WonItemComponent,
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
