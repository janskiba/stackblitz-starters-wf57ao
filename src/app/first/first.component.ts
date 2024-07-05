import {
  Component,
  Input,
  inject,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ExampleStateService, User } from '../example-state.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent implements OnInit {
  @Input() exampleInput!: User;

  subjectData!: User;

  exampleService = inject(ExampleStateService);
  cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.exampleService.exampleStateSubject.subscribe((data) => {
      this.subjectData = data;

      // marks the view as changed so that it can be checked again
      // this.cdr.markForCheck();
    });
  }
}
