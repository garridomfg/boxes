import { Component, Input, OnInit } from '@angular/core';
import { ItemVariant, BoxOpening } from '../../interfaces/boxes.interfaces';

@Component({
  selector: 'app-won-item',
  templateUrl: './won-item.component.html',
  styleUrls: ['./won-item.component.scss'],
})
export class WonItemComponent implements OnInit {
  @Input() itemVariant: BoxOpening | undefined;

  get itemToShow() {
    return this.itemVariant?.itemVariant
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.itemVariant?.itemVariant)
  }
}
