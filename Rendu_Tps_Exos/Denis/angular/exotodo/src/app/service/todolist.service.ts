/*import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  public tasks: Task[];
  constructor() {
    this.tasks = [
      new Task(0, "gatito", true, "ppppp"),
      new Task(1, "perrito", true, "cccc"),
      new Task(2, "puerquito", false, "ffff"),
      new Task(4, "ratoncito", true, "dddd")
    ];
    
   }
}*/
import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

const initialList = [
  new Task(0, 'gatito', true, 'pppp'),
  new Task(1, 'perrito', true, 'cccc'),
  new Task(2, 'puerquito', false, 'fffff'),
  new Task(3, 'ratoncito', true, 'ddddd'),
];

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  public tasks: Task[] = [];

  constructor() {
    this.updateList(initialList);
  }

  public updateList(list: Task[]) {
    new Promise(() => {
      setTimeout(() => {
        this.tasks = list;
      }, 1000);
    });
  }
  public toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
  
