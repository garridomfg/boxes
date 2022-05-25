import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CurrentUser } from '../../auth/interfaces/auth.interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentUser: CurrentUser = {
    __typename: '',
    id: '',
    name: '',
    wallets: [],
  };

  get balance() {
    return this.currentUser.wallets.find((wallet) => wallet.amount);
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogin(): void {
    this.authService
      .login()
      .subscribe(() => (this.currentUser = this.authService.user));
  }

  onLogout(): void {
    this.currentUser = {
      __typename: '',
      id: '',
      name: '',
      wallets: [],
    };
  }
}
