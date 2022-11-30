export class Task {
  public _id: number;
  public _title: string;
  public _completed: boolean;
  public _description: string;
  public _datecreated: Date;
  //
  constructor(id: number) {
    this._id = id;
    this._title = 'titre ' + id;
    this._completed = false;
    this._description = 'description ' + id;
    this._datecreated = new Date(); // new Date('10/10/2022 09:00');
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
}
