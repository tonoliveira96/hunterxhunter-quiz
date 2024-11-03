import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
})
export class QuestionComponent {
 @Input() question!: string;
}
