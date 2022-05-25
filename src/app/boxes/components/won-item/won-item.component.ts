import { Component, Input, OnInit } from '@angular/core';
import { ItemVariant } from '../../interfaces/boxes.interfaces';

@Component({
  selector: 'app-won-item',
  templateUrl: './won-item.component.html',
  styleUrls: ['./won-item.component.scss'],
})
export class WonItemComponent implements OnInit {
  @Input() itemVariant: ItemVariant = {
    id: '',
    name: '',
    value: 0,
    __typename: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
