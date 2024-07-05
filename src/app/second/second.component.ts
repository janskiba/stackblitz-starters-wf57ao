import { Component, Input, inject } from '@angular/core';
import { ExampleStateService, User } from '../example-state.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  @Input() exampleInput!: User;

  exampleService = inject(ExampleStateService);
}
