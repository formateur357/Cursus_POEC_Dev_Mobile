import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/class/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() public task!: Task;
  @Output() public completeChanged = new EventEmitter<boolean>();

  constructor() {
  }

  getName(): string {
    return this.task.completed ? 'terminé' : 'encours';
  }

  getBadgeVariant(): string {
    return !this.task.completed
      ? 'd-inline float-right badge text-bg-success'
      : 'd-inline float-right badge text-bg-warning';
  }

  getItemVariant(): string {
    return !this.task.completed
      ? 'list-group-item list-group-item-success'
      : 'list-group-item list-group-item-warning';
  }
  toggleComplete(): void {
    if (this.task.completed == true) {
      this.task.completed = false;
      
    } else {
      this.task.completed = true;
    }
    this.completeChanged.emit(this.task.completed);
  }
}
