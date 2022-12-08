export class User {
  //
  private static instanceCounter: number = 10;
  //
  protected _id: number;
  //
  protected _prenom: string;
  protected _nom: string;
  protected _email: string;
  protected _team: string;
  protected _skills: string[];

  constructor(prenom: string, nom: string, email: string) {
    //
    this._id = User.instanceCounter++; // Création automatique de l'id par rapport a la variable statique
    //
    this._prenom = prenom;
    this._nom = nom;
    this._email = email;
    this._team = '';
    this._skills = [];
  }

  static newInstance(): User {
    let id = User.instanceCounter + 1;
    ////
    let prenom = 'prenom ' + id;
    let nom = 'nom ' + id;
    let email = 'email ' + id + '@gmail.com';
    let user = new User(prenom, nom, email);
    //
    return user;
  }

  get firstName(): string {
    return this._prenom;
  }

  set firstName(firstNamePar: string) {
    this.firstName = firstNamePar;
  }
  get lastName(): string {
    return this._nom;
  }

  set lastName(lastNamepar: string) {
    this.lastName = lastNamepar;
  }

  get email(): string {
    return this._email;
  }

  set email(emailpar: string) {
    this._email = emailpar;
  }

  get team(): string {
    return this._team;
  }

  set team(teampar: string) {
    this._team = teampar;
  }

  get skills(): string[] {
    return this._skills;
  }

  set skills(skillspar: string[]) {
    this._skills = skillspar;
  }
}
