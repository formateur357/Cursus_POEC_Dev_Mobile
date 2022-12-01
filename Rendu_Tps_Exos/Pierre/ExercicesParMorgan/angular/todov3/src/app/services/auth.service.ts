import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth: boolean;

  constructor() {
    this.isAuth = false;
  }

  public login(): void {
    setTimeout(() => {
      this.isAuth = true;
      console.log('AuthService.login()');
    }, 500);
  }

  public logout(): void {
    setTimeout(() => {
      this.isAuth = false;
      console.log('AuthService.logout()');
    }, 500);
  }
}
