import { Injectable } from '@angular/core';
import { User } from '../classes/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth: boolean;

  public user: User;

  constructor() {
    this.isAuth = false;
    this.user = new User('Elon', 'Musk', 'elon.musk@tesla.com');
  }

  public login(): void {
    setTimeout(() => {
      this.isAuth = true;
      console.log('AuthService.login()');
    }, 1500);
  }

  public logout(): void {
    setTimeout(() => {
      this.isAuth = false;
      console.log('AuthService.logout()');
    }, 1500);
  }
}
