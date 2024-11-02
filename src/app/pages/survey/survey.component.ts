import { Component, OnInit } from '@angular/core';
import { QuizQuestionsProps, quizQuestions } from '../../../data/quiz';
import { QuestionComponent } from '../../components/question/question.component';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent implements OnInit {
  questions: QuizQuestionsProps = {} as QuizQuestionsProps;
  currentQuestion: QuizQuestionsProps = {} as QuizQuestionsProps;
  surveyIndex: number = 0;

  ngOnInit(): void {
    if (quizQuestions) {
      this.currentQuestion = quizQuestions[this.surveyIndex];
    }
  }

  onSelectAnswer() {
    this.surveyIndex += 1;
    this.currentQuestion = quizQuestions[this.surveyIndex];
  }
}
