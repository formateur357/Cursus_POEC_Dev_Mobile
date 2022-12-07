import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth: boolean;

  public user: User;

  constructor(public router: Router) {
    this.isAuth = false;
    this.user = new User('Elon', 'Musk', 'elon.musk@tesla.com');
  }

  public login(): void {
    setTimeout(() => {
      this.isAuth = true;
      this.router.navigate(['todolist'])
      console.log('AuthService.login()');
    }, 2000);

  }

  public logout(): void {
    setTimeout(() => {
      this.isAuth = false;
      this.router.navigate(['login'])
      console.log('AuthService.logout()');
    }, 2000);

  }
}
