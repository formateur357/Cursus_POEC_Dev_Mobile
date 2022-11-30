import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { User } from './classes/user.model';
import { TaskComponent } from './components/task/task.component';
import { Task } from './classes/task.model';
import { TodoListService } from './services/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';

  public name1: string;
  public name2: string;
  public name3: string;

  public complete1: boolean;
  public complete2: boolean;
  public complete3: boolean;

  public childCount: number = 1;

  public user: User;

  public taskList: Task[];

  public pourcentage: number = 0; // Pour tests, à supprimer éventuellement

  public maxi = 7; // Nombre de taches a générer automatiquement
  @Input() public mode: number = 1; // Mode de génération automatique des taches

  constructor(todolistservice: TodoListService) {
    this.name1 = 'Passer commande Amazon';
    this.name2 = 'Aller à la poste';
    this.name3 = 'Ouvrir le colis';
    //
    this.complete1 = true;
    this.complete2 = false;
    this.complete3 = false;
    //
    this.user = new User('Elon', 'Musk', 'elon.musk@tesla.com');
    this.taskList = [];
    this.automaticGenerator();
  }

  automaticGenerator(): void {
    this.taskList = [];
    //// Maintenant nous allons créer plusieurs Task

    for (let i = 0; i < this.maxi; i++) {
      let task: Task = new Task(i);
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
      this.taskList.push(task);
    }
  }

  changeCounter(childComplete: boolean): void {
    childComplete ? this.childCount++ : this.childCount--;
    this.pourcent(); // Mise à jour automatique du pourcentage pour avoir un affichage correct
  }

  tasktrackByFunction(index: number, item: any): string {
    return item.id;
  }

  listeTachesCommencees(): Task[] {
    let tab = this.taskList.filter((task) => !task.completed); // obtenir un extrait du tableau
    return tab;
  }

  pourcent(): number {
    if (this.taskList.length == 0) {
      // Eviter la division par zéro
      this.pourcentage = 0;
    } else {
      this.pourcentage =
        100 * (this.listeTachesCommencees().length / this.taskList.length);
    }
    return this.pourcentage;
  }

  get mode2() {
    return this.mode;
  }

  set mode2(mode: number) {
    this.mode = mode;
    this.automaticGenerator();
  }
}
