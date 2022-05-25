import { Component, OnInit } from '@angular/core';
import { BoxesService } from '../../services/boxes.service';

@Component({
  selector: 'app-box-grid',
  templateUrl: './box-grid.component.html',
  styleUrls: ['./box-grid.component.scss'],
})
export class BoxGridComponent implements OnInit {
  loading: boolean = true;
  boxes: any;

  constructor(private boxesService: BoxesService) {}

  ngOnInit() {
    this.boxesService
      .fetchBoxes()
      .subscribe(() => (this.boxes = this.boxesService.boxes));
  }
}
