import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxesService } from '../../services/boxes.service';
import { Apollo } from 'apollo-angular';
import { OPEN_BOX } from '../../../graphql/graphql.mutations';
import { ItemVariant, BoxOpening } from '../../interfaces/boxes.interfaces';

@Component({
  selector: 'app-box-view',
  templateUrl: './box-view.component.html',
  styleUrls: ['./box-view.component.scss'],
})
export class BoxViewComponent implements OnInit {
  public box: any;
  public err: string = '';
  public itemVariant: BoxOpening | undefined
  public loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private boxesService: BoxesService,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.boxesService.getBoxById(id).subscribe((b) => (this.box = b));
    });
  }

  openBox(id: string, amount = 1, multiplierBoxBet = 1) {
    this.err = '';
    this.loading = true;
    const input = {
      boxId: id,
      amount,
      multiplierBoxBet,
    };

    this.apollo
      .mutate({
        mutation: OPEN_BOX,
        variables: {
          input,
        },
      })
      .subscribe(
        (data: any) => {
          this.loading = false;
          this.itemVariant = data.data.openBox.boxOpenings[0]
          return data;
        },
        (error) => {
          this.loading = false;
          this.err = error;
        }
      );
  }
}
