import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CURRENT_UESR } from '../../graphql/graphql.queries';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  constructor(private apollo: Apollo) {}

  login() {
    return this.apollo.watchQuery<any>({
      query: CURRENT_UESR,
    })
    .valueChanges.pipe(
      map((data: any) => {
        this.user = data.data.currentUser;
        return data;
      })
    )
  }
}
