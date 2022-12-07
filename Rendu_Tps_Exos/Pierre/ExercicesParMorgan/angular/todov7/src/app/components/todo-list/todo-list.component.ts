import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from 'src/app/class/task.model';
import { TodoListService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  public name1: string;
  public name2: string;
  public name3: string;

  public complete1: boolean;
  public complete2: boolean;
  public complete3: boolean;

  public childCount: number = 1;

  public pourcentage: number = 0; // Pour tests, à supprimer éventuellement

  // propriete recuperant la liste de taches, on l'assigne dans le callback de notre abonnement a l'observable.
  public tasks: Task[] = [];

  // propriete recuperant l'observable auquel on peut s'abonner cote composant.
  private tasks$!: Observable<Task[]>; // utiliser un $ dollar dans le nom pour signale qu'il s'agit d'un observable

  private subscribe!: Subscription | undefined; // quel type utiliser ???????<Task[]>;
  // on injecte notre service todolist
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

  // hook qui se declenche juste apres la creation du composant
  ngOnInit(): void {
    // on recupere l'observable
    this.tasks$ = this.tls.get_tasksObservable();

    // on s'abonne a l'observable et on recupere la liste de taches
    this.subscribeToSubjectObservable(); // pour se subscribe à l'observable et prendre en compte les changements
  }

  // hook qui se declenche a la destruction du composant
  ngOnDestroy(): void {
    // on se desabonne de l'observable
    this.subscribe?.unsubscribe();
  }

  // getter pour recuperer le nombre de taches completees
  get nbTrue(): number {
    return this.tasks?.length
      ? this.tasks.filter((task) => task.completed).length
      : 0;
  }

  // getter pour recupere le nombre de taches
  get nbTasks(): number {
    return this.tasks?.length ? this.tasks.length : 0;
  }

  // getter pour recuperer le pourcentage de taches completees
  get percent(): number {
    return this.nbTasks != 0 ? (this.nbTrue / this.nbTasks) * 100 : 0;
  }

  // getter pour recuperer la couleur du pourcentage
  get textColor(): string {
    return this.percent > 50 ? 'green' : 'red';
  }

  // methode pour renvoyer true ou false en fonction du nombre de taches
  public isBold(): boolean {
    return this.tasks?.length > 0 ? true : false;
  }

  // getList() dans le texte de l'exercice
  // methode pour s'abonner a l'observable et pour y associer un callback qui se declenchera à chaque nouvelle donnee envoyee dans le flux de l'observable.
  subscribeToSubjectObservable(): void {
    this.subscribe = this.tasks$.subscribe((tasks) => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }

  // fonction trackBy afin de ne recharger que les elements concernes lors d'une modification ayant lieu sur la liste associee au ngFor.
  tasktrackByFunction(index: number, item: any): string {
    return item.id;
  }

  changeCounter(childComplete: boolean): void {
    childComplete ? this.childCount++ : this.childCount--;
    this.pourcent(); // Mise à jour automatique du pourcentage pour avoir un affichage correct
  }
  listeTachesCommencees(): Task[] {
    let tab = this.tls.tasks.filter((task) => !task.completed); // obtenir un extrait du tableau
    return tab;
  }

  pourcent(): number {
    if (this.tls.tasks.length == 0) {
      // Eviter la division par zéro
      this.pourcentage = 0;
    } else {
      this.pourcentage =
        100 * (this.listeTachesCommencees().length / this.tls.tasks.length);
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
