import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Task } from 'src/app/class/task.model';
import { TodoListService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() public task: Task | undefined;
  @Output() public completeChanged: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Input() public complete: boolean;

  public _name: string = '';
  public _description: string = '';

  @Input() public indexTask: number = -1; // Inconnu

  constructor(
    public /* public augmenter la visibilité de l'injection du service */ tls: TodoListService
  ) {
    this.complete = false;
  }

  /*
  Inverser la valeur du boolean completed
  */
  public toggleComplete(): void {
    if (this.task == undefined) {
      this.complete = !this.complete;
    } else {
      this.tls.toggleComplete(this.indexTask);
      // this.task.toggleComplete(); // avant on n'avait pas de service et on appellait directement toggleComplete() sur l'instance task
    }
    let c = this.isComplete();
    //// Maintenant on va émettre le boolean 'complete' vers le parent par principe "bubbling" grace au décorateur @Output
    this.completeChanged.emit(c);
  }

  public getComplete(): string {
    let resultat: string;
    let c = this.isComplete();
    resultat = c ? 'Terminée' : 'En cours';
    return resultat;
  }

  public getBadgeVariant(): string {
    let resultat: string;
    let c = this.isComplete();
    resultat = c
      ? 'd-inline float-right badge badge-success'
      : 'd-inline float-right badge badge-warning';
    return resultat;
  }

  public getItemVariant(): string {
    let resultat: string;
    let c = this.isComplete();
    resultat = c
      ? 'list-group-item list-group-item-success'
      : 'list-group-item list-group-item-warning';
    return resultat;
  }

  /**
   * Changer le texte qu'on mettra plus tard dans le gros bouton rouge
   */
  public getButtonText(): string {
    let resultat: string;
    let c = this.isComplete();
    resultat = c ? 'Commencer cette tache' : 'Terminer cette tache';
    return resultat;
  }

  isComplete(): boolean {
    let c = this.task == undefined ? this.complete : this.task?.completed;
    return c;
  }

  /*****************************
   * Bloc des setters et getters
   ****************************/
  get date(): any {
    if (this.task == undefined) {
      return null;
    } else {
      return this.task.date;
    }
  }

  set date(date: Date) {
    if (this.task == undefined) {
      ////
    } else {
      this.task.date = date;
    }
  }

  @Input()
  get name(): string {
    if (this.task == undefined) {
      return this._name;
    } else {
      return this.task.title;
    }
  }

  set name(namesetter: string) {
    if (this.task == undefined) {
      this._name = namesetter;
    } else {
      this.task.title = namesetter;
    }
  }

  @Input()
  get description(): string {
    if (this.task == undefined) {
      return this._description;
    } else {
      return this.task.description;
    }
  }

  set description(namesetter: string) {
    if (this.task == undefined) {
      this._description = namesetter;
    } else {
      this.task.description = namesetter;
    }
  }

  addThisTolist(): void {
    //
    let newtask = Task.newInstance();
    newtask.completed = this.complete;
    newtask.title = this._name;
    newtask.description =
      this._description.length == 0
        ? 'Description pour ' + this._name
        : this._description;
    newtask.date = new Date(Date.now());
    this.tls.tasks.unshift(newtask);
  }
}
