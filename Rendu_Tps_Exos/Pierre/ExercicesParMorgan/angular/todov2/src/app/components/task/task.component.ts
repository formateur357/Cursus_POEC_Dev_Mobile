import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Task } from 'src/app/classes/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() public complete: boolean;
  @Input() public name: string | undefined;
  @Output() public completeChanged = new EventEmitter<boolean>();
  @Input() public task: Task | undefined;

  constructor() {
    this.complete = false;
    //this.task = new Task(0);
  }

  isComplete(): boolean {
    let c = this.task == undefined ? this.complete : this.task?.completed;
    return c;
  }

  getComplete(): string {
    let resultat: string;
    let c = this.isComplete();
    resultat = c ? 'Terminée' : 'En cours';
    return resultat;
  }

  getBadgeVariant(): string {
    let resultat: string;
    let c = this.isComplete();
    resultat = c
      ? 'd-inline float-right badge badge-success'
      : 'd-inline float-right badge badge-warning';
    return resultat;
  }
  getItemVariant(): string {
    let resultat: string;
    let c = this.isComplete();
    resultat = c
      ? 'list-group-item list-group-item-success'
      : 'list-group-item list-group-item-warning';
    return resultat;
  }

  toggleComplete(): void {
    if (this.task == undefined) {
      this.complete = !this.complete;
      this.completeChanged.emit(this.complete);
    } else {
      this.task.completed = !this.task.completed;
      this.completeChanged.emit(this.task.completed);
    }
  }

  getButtonText(): string {
    let resultat: string;
    let c = this.isComplete();
    resultat = c ? 'Commencer cette tache' : 'Terminer cette tache';
    return resultat;
  }

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
}
