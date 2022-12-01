import { Injectable } from '@angular/core';
import { Task } from '../classes/task.model';
import { Input } from '@angular/core';
////
let initialList: Task[] = [];

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  public taskList: Task[];

  public maxi = 7; // Nombre de taches a générer automatiquement
  @Input() public mode: number = 1; // Mode de génération automatique des taches

  private promise; // Promise pour retarder l'affectation des valeurs dans le tableau tasklist

  private testpierre = false;

  constructor() {
    this.taskList = [];
    this.promise = new Promise<Task[]>(function (resolve, reject) {
      // Corps de la callback de promise
      console.log('promise::lambda function ', initialList.length);
      resolve(initialList);
    });
    //
    if (this.testpierre) {
      initialList = this.automaticGenerator();
      this.updateList(initialList);
    } else {
      //
      this.promise
        .then((list) => {
          initialList = this.automaticGenerator();
          console.log('then 1 ::de la promise ', list.length);
          return initialList;
        })
        .then((list) => {
          this.updateList(list);
          console.log('then 2 ::de la promise ', list.length);
          return list;
        })
        .then((list) => {
          console.log(
            'then 3 ::de la promise ',
            list.length,
            this.taskList.length
          );
          return list;
        })
        .catch((error) => {
          // Erreur fatale
        });
    }
  }

  public updateList(plusieursTasks: Task[]): void {
    this.taskList = plusieursTasks;
  }

  /*

  */
  toggleComplete(indexTask: number): void {
    if (indexTask < this.taskList.length) {
      this.taskList[indexTask].toggleComplete();
    } else {
      // Error
    }
  }

  automaticGenerator(): Task[] {
    let listDeTask = [];
    //// Maintenant nous allons créer plusieurs Task
    for (let i = 0; i < this.maxi; i++) {
      let task: Task = new Task();
      switch (this.mode) {
        default:
          task.date = new Date('10/10/2022 09:00');
          task.completed = false;
          break;
        case 0:
          task.date = new Date('1/1/2020 20:20');
          task.completed = false;
          break;
        case 1:
          if (i == 1) {
            task.date = new Date();
            task.completed = true;
          }
          break;
        case 2:
          if (i == 1 || i == 2) {
            task.date = new Date('10/10/2022 09:00');
            task.completed = true;
          }
          break;
        case 3:
          task.date = new Date('10/10/2022 09:00');
          task.completed = i % 2 == 0;
          break;
      }
      listDeTask.push(task);
    }
    return listDeTask;
  }
}
