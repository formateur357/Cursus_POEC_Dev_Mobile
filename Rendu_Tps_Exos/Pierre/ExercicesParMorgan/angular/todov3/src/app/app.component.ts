import { Component, Input } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
import { User } from './classes/user.model';
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

  public pourcentage: number = 0; // Pour tests, à supprimer éventuellement

  constructor(
    public /* public augmenter la visibilité de l'injection du service */ tls: TodoListService
  ) {
    this.name1 = 'Passer commande Amazon';
    this.name2 = 'Aller à la poste';
    this.name3 = 'Ouvrir le colis';
    //
    this.complete1 = true;
    this.complete2 = false;
    this.complete3 = false;
    //
  }

  changeCounter(childComplete: boolean): void {
    childComplete ? this.childCount++ : this.childCount--;
    this.pourcent(); // Mise à jour automatique du pourcentage pour avoir un affichage correct
  }

  tasktrackByFunction(index: number, item: any): string {
    return item.id;
  }

  listeTachesCommencees(): Task[] {
    let tab = this.tls.taskList.filter((task) => !task.completed); // obtenir un extrait du tableau
    return tab;
  }

  pourcent(): number {
    if (this.tls.taskList.length == 0) {
      // Eviter la division par zéro
      this.pourcentage = 0;
    } else {
      this.pourcentage =
        100 * (this.listeTachesCommencees().length / this.tls.taskList.length);
    }
    return this.pourcentage;
  }

  get mode2() {
    return this.tls.mode;
  }

  set mode2(mode: number) {
    this.tls.mode = mode;
    this.tls.automaticGenerator();
  }
}
