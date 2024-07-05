import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FirstComponent } from './app/first/first.component';
import { SecondComponent } from './app/second/second.component';
import { ExampleStateService, User } from './app/example-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponent, SecondComponent],
  template: `
  <app-first [exampleInput]="exampleInfo"/>
  <hr>
  <app-second [exampleInput]="exampleInfo"/>
  <hr>
  
  <button (click)="changeNameAsInput()">Change name as input</button>
  <button (click)="exampleService.changeNameValue()">Change name as value</button>
  <button (click)="exampleService.changeNameObservable()">Change name as obserable</button>

  <hr>
  <button (click)="reset()">Reset state</button>
  `,
})
export class App {
  exampleInfo: User = {
    name: 'Jan',
    age: 26,
  };

  exampleService = inject(ExampleStateService);

  changeNameAsInput() {
    this.exampleInfo = {
      ...this.exampleInfo,
      name: 'Jan changed from input',
    };
  }

  reset() {
    this.exampleService.resetState();
    this.exampleInfo = {
      name: 'Jan',
      age: 26,
    };
  }
}

bootstrapApplication(App);
