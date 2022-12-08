import { Injectable } from '@angular/core';
import { User } from '../class/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Input } from '@angular/core';

let initialList: User[] = [
  new User('Chauffer le dancefloor', 'Danser le woogie.', '1@gmail.com'),
  new User(
    'Partir au Hesscape Game',
    "Comment tu t'en sortiras?",
    '2@gmail.com'
  ),
  new User(
    'Apportez des cookies à momie.',
    'Miam des doigts...',
    '3@gmail.com'
  ),
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // propriete contenant la liste de utilisateurs.
  private users: User[];

  // propriete contenant le sujet (contient l'observable et l'observer, mais on s'en servira en tant qu'Observer cote service).
  private _users = new BehaviorSubject<User[]>([]); // utiliser un _ underscore dans le nom - le sujet contient l'observer et l'observable

  // propriete contenant l'observable qu'on enverra aux composants voulant l'utiliser afin de s'abonner, via la methode getUsers de notre service.
  readonly users$: Observable<User[]> = this._users.asObservable(); // utiliser un $ dollar dans le nom pour signaler qu'il s'agit d'un observer

  // propriete contenant le message renvoye par la promise.
  public prom!: Promise<User[]>; // // Promise pour retarder l'affectation des valeurs dans le tableau userlist

  constructor() {
    this.users = [];
    this.prom = new Promise<User[]>((resolve) => {
      console.log('promise::lambda A function ', initialList.length);
      setTimeout(() => {
        console.log('promise::lambda B ');
        this.users = initialList;
        this.emiter(this.users); // c'est ici qu'il faut envoyer la liste modifiée
        resolve([]);
      }, 1000);
    });
  }

  public updateList(plusieursUsers: User[]): void {
    this.users = plusieursUsers;
  }

  // methode qui renvoie l'observable aux composants souhaitant l'utiliser afin de s'abonner au flux.
  public get_usersObservable(): Observable<User[]> {
    return this.users$;
  }

  // methode pour emettre une donnee dans le flux
  private emiter(toBeSent: User[]): void {
    let cloneList: User[];
    cloneList = Object.assign([], toBeSent);
    // on utilise la methode next des observer qui nous permet d'envoyer une copie profonde de notre liste de users dans le flux de l'observable.
    this._users.next(cloneList);
  }

  public get_usersSubject(): BehaviorSubject<User[]> {
    return this._users;
  }

  public addUserAndNotify(user: User): void {
    if (false) {
      this.users.push(user);
    } else {
      this.users.unshift(user);
    }
    // émettre le changement pour tous les observers
    this.emiter(this.users); // Envoyer la nouvelle liste à tous les 'observers' encore connectés
  }
}
