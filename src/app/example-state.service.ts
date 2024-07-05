import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class ExampleStateService {
  exampleState: User = {
    name: 'Jan',
    age: 26,
  };

  exampleStateSubject = new BehaviorSubject(<User>{
    name: 'Jan',
    age: 26,
  });

  changeNameValue() {
    this.exampleState = {
      ...this.exampleState,
      name: 'Janek (changed from value)',
    };
  }

  changeNameObservable() {
    this.exampleStateSubject.next({
      ...this.exampleState,
      name: 'Janek (changed from observable)',
    });
  }

  resetState() {
    this.exampleState = {
      name: 'Jan',
      age: 26,
    };

    this.exampleStateSubject.next({
      name: 'Jan',
      age: 26,
    });
  }
}
