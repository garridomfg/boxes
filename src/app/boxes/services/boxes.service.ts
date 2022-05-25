import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { BOX_GRID } from 'src/app/graphql/graphql.queries';
import { Boxes } from '../interfaces/boxes.interfaces';

@Injectable({
  providedIn: 'root',
})
export class BoxesService {
  loading: boolean = true;
  boxes: Boxes | undefined;

  constructor(private apollo: Apollo) {}

  fetchBoxes() {
    return this.apollo
      .watchQuery<Boxes>({
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
      map((data: Boxes) => {
        const boxes = data.data.boxes.edges;
        const box = boxes.find((b: any) => b.node.id === id);
        return box;
      })
    );
  }

}
