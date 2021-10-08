import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask); //whatever it is (toggled or not), that is what gets passed in
  }

  //onToggle gets called when we click Add

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  //we want to subscribe to onToggle

}
