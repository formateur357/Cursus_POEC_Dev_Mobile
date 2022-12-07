import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/class/task.model';
import { TodoListService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  public title: string | undefined;
  public description: string | undefined;
  public select_complete: boolean | undefined;

  constructor(protected tls: TodoListService, protected router: Router) {}

  ngOnInit() {}

  public onSubmit(taskForm: NgForm): void {
    console.info('onSubmit');
    console.log('données du taskForm', taskForm.value);
    console.log('le taskForm lui même', taskForm);
    //
    let task = Task.newInstance(); // Créer une nouvelle instance
    // Renseigner les différentes propriétés à partir des données du formulaire
    task.title = taskForm.value.title;
    task.description = taskForm.value.description;
    // Demander au service d'ajouter la tache dans la liste des tâches
    this.tls.addTaskAndNotify(task);
    // Réinitialiser le formulaire
    switch (taskForm.value.form_action) {
      case 'resetForm':
        taskForm.reset();
        console.info('switch: resetForm');
        break;
      case 'inputNewTask':
        console.info('switch: inputNewTask');
        break;
      case 'showTaskList':
        // router sur le app-task
        this.router.navigate(['todolist']); // ou peut etre redirect ?
        //
        break;
      default:
        console.info(
          'switch: default : valeur ignorée' + taskForm.value.form_action
        );
        break;
    }
  }
}
