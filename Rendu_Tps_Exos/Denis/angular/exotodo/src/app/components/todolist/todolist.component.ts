import { Component } from '@angular/core';
import { TodolistService } from 'src/app/service/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent  {

  public title: string;
  public count : number;
  //public tasks: Task[];
 
  pourcentage: number= 0;
  public percent: number;
  constructor(public tls : TodolistService){
    this.title = "todo";
    this.count = 1;
   /* this.tasks = [
      new Task(0, "gatito", true, "ppppp"),
      new Task(1, "perrito", true, "cccc"),
      new Task(2, "puerquito", false, "ffff"),
      new Task(4, "ratoncito", true, "dddd")
    ];*/
    this.count = this.tls.tasks.filter((task) => task.completed).length;
    this.percent =
      this.tls.tasks.length > 0 ? (this.count / this.tls.tasks.length) * 100 : 0;
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
    } 
    changeCounter(donnee : boolean):void{
      if (donnee==false){
        this.count++;
      }
      else {
        this.count--; 
      }

    }
}
