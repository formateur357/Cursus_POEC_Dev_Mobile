import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/class/task.model';
import { TodoListService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  public task: Task | null;

  constructor(private todo: TodoListService, private route: ActivatedRoute) {
    this.task = null;
  }

  ngOnInit(): void {
    const routeId: string | null = this.route.snapshot.paramMap.get('id');
    let id: number = routeId == null ? -1 : +routeId;
    this.task = this.todo.getTaskById(id);
    console.log(this.task);
  }
}
