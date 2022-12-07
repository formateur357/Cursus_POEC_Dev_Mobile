import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../class/task.model';
import { Input } from '@angular/core';

let initialList: Task[] = [
  new Task('Chauffer le dancefloor', true, 'Danser le woogie.', new Date()),
  new Task(
    'Partir au Hesscape Game',
    false,
    "Comment tu t'en sortiras?",
    new Date(Date.now())
  ),
  new Task(
    'Apportez des cookies à momie.',
    true,
    'Miam des doigts...',
    new Date('01/01/2020 09:00')
  ),
];

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  // propriete contenant la liste de taches.
  public /* private désactivé pour migration */ tasks: Task[]; /* anciennement "public taskList" avant l'utilisation des observables */

  // propriete contenant le sujet (contient l'observable et l'observer, mais on s'en servira en tant qu'Observer cote service).
  private _tasks = new BehaviorSubject<Task[]>([]); // toDoListSubject dans le texte de l'exercice - utiliser un $ dollar dans le nom - le sujet contient l'observer et l'observable

  // propriete contenant l'observable qu'on enverra aux composants voulant l'utiliser afin de s'abonner, via la methode getTasks de notre service.
  readonly tasks$: Observable<Task[]> = this._tasks.asObservable(); // utiliser un _ underscore dans le nom pour signalers qu'il s'agit d'un observer

  // propriete contenant le message renvoye par la promise.
  public prom!: Promise<Task[]>; // // Promise pour retarder l'affectation des valeurs dans le tableau tasklist

  @Input() public mode: number = 1; // Mode de génération automatique des taches

  @Input() public dataLoaded: boolean = false;

  public maxi = 7; // Nombre de taches a générer automatiquement
  private testpierre = false;
  public static WAIT = 2000;

  /*
#########################
#########################
*/
  // Dans le constructor on initialise notre liste de taches d'abord en tant que liste vide puis dans le callback de notre promise on assigne initialList à notre liste de taches, puis on emet la liste de taches dans le flux de l'observable grace a la methode emiter de notre service.
  constructor() {
    this.dataLoaded = false;
    this.tasks = [];
    this.prom = new Promise<Task[]>((resolve) => {
      console.log('promise::lambda A function ', initialList.length);
      setTimeout(() => {
        console.log('promise::lambda B ');
        this.tasks = initialList;
        this.emiter(this.tasks); // c'est ici qu'il faut envoyer la liste modifiée
        resolve([]);
      }, TodoListService.WAIT);
    });
    //
    if (this.testpierre) {
      initialList = this.automaticGenerator();
      this.updateList(initialList);
    } else {
      //
      this.prom
        .then((list) => {
          initialList = this.automaticGenerator();
          console.log('then 1 ::de la promise ', list.length);
          return initialList;
        })
        .then((list) => {
          this.updateList(list);
          this.dataLoaded = true;
          console.log('then 2 ::de la promise ', list.length);
          return list;
        })
        .then((list) => {
          console.log(
            'then 3 ::de la promise ',
            list.length,
            this.tasks.length
          );
          return list;
        })
        .catch((error) => {
          // Erreur fatale
        });
    }
  }

  public updateList(plusieursTasks: Task[]): void {
    this.tasks = plusieursTasks;
  }

  /*

  */
  public toggleComplete(indexTask: number): void {
    if (indexTask < this.tasks.length) {
      this.tasks[indexTask].toggleComplete();
    } else {
      // Error
    }
  }

  automaticGenerator(): Task[] {
    let listDeTask = [];
    //// Maintenant nous allons créer plusieurs Task
    for (let i = 0; i < this.maxi; i++) {
      let task: Task = Task.newInstance();
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

  // methode qui renvoie l'observable aux composants souhaitant l'utiliser afin de s'abonner au flux.
  public get_tasksObservable(): Observable<Task[]> {
    return this.tasks$;
  }

  // methode pour emettre une donnee dans le flux
  private emiter(toBeSent: Task[]): void {
    let cloneList: Task[];
    cloneList = Object.assign([], toBeSent);
    // on utilise la methode next des observer qui nous permet d'envoyer une copie profonde de notre liste de taches dans le flux de l'observable.
    this._tasks.next(cloneList);
  }

  // methode afin de mettre a jour la propriete completed de la tache a l'id fournit en parametres. On oublie pas d'emettre le changement dans le flux grace a notre methode emiter.
  public toggleComplete_morgan(id: number) {
    this.tasks[id].completed = !this.tasks[id].completed;
    this.emiter(this.tasks); // Envoyer la nouvelle liste à tous les 'observers' encore connectés
  }

  // renvoie une tache en fonction de l'id fournit en parametres.
  public getTaskById(id: number): Task | null {
    // for (const task of this.tasks) {
    //   if (task.id == id)
    //     return task;
    // }
    // return null;
    return this.tasks.filter((task) => task.id == id)[0];
  }

  public get_tasksSubject(): BehaviorSubject<Task[]> {
    return this._tasks;
  }

  public addTaskAndNotify(task: Task): void {
    if (false) {
      this.tasks.push(task);
    } else {
      this.tasks.unshift(task);
    }
    // émettre le changement pour tous les observers
    this.emiter(this.tasks); // Envoyer la nouvelle liste à tous les 'observers' encore connectés
  }

  /*

  dans le texte de l'exercice
  getList(): Observable<Task> {
    return from(this._tasks);
  }
*/
}
