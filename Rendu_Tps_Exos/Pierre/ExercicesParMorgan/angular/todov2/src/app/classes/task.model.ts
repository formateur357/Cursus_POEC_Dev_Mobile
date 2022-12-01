export class Task {
  private static instanceCounter: number = 10;

  public _id: number;
  public _title: string;
  public _completed: boolean;
  public _description: string;
  public _datecreated: Date;

  //
  constructor() {
    this._id = Task.instanceCounter++; // Création automatique de l'id par rapport a la variable statique
    this._title = 'titre ' + this._id;
    this._completed = false;
    this._description = 'description ' + this._id;
    this._datecreated = new Date(); // new Date('10/10/2022 09:00');
  }

  /*
   * Bloc des setters et getters
   */
  static get counter() {
    return Task.instanceCounter;
  }

  get id() {
    return this._id;
  }

  get date() {
    return this._datecreated;
  }

  set date(date: Date) {
    this._datecreated = date;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get completed() {
    return this._completed;
  }

  set completed(completed: boolean) {
    this._completed = completed;
  }

  get description() {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  /*
  Inverser la valeur du boolean completed
  */
  toggleComplete(): void {
    this.completed = !this.completed;
  }
}
