import { Component } from '@angular/core';
import { Task } from './class/task.model';
import {  } from '@angular/core';
import { zip } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  public count : number;
  public tasks: Task[];
  pourcentage: number= 0;
   
  constructor(){
    this.title = "todo";
    this.count = 1;
    this.tasks = [
      new Task(0, "gatito", true, "ppppp"),
      new Task(1, "perrito", true, "cccc"),
      new Task(2, "puerquito", false, "ffff"),
      new Task(4, "ratoncito", true, "dddd")
    ];
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
