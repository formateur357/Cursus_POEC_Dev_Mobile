export class User {
  //
  public _prenom: string;
  public _nom: string;
  public _email: string;
  constructor(prenom: string, nom: string, email: string) {
    //
    this._prenom = prenom;
    this._nom = nom;
    this._email = email;
  }
}
