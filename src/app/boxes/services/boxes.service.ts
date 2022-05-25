import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Box } from '../interfaces/boxes.interfaces';
import { BOX_GRID } from 'src/app/graphql/graphql.queries';
import { OPEN_BOX } from '../../graphql/graphql.mutations';

@Injectable({
  providedIn: 'root',
})
export class BoxesService {
  loading: boolean = true;
  boxes: Box | undefined;

  constructor(private apollo: Apollo) {}

  fetchBoxes() {
    return this.apollo
      .watchQuery<any>({
        query: BOX_GRID,
      })
      .valueChanges.pipe(
        map((data: any) => {
          this.boxes = data.data.boxes.edges;
          return data;
        })
      );
  }

  getBoxById(id: string) {
    return this.fetchBoxes().pipe(
      map((data) => {
        const boxes = data.data.boxes.edges;
        const box = boxes.find((b: any) => b.node.id === id);
        return box;
      })
    );
  }

}
