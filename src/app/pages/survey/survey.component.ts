import { Component, OnInit } from '@angular/core';
import { quizQuestions } from '../../../data/quiz';
import { QuizQuestionsProps } from '../../../types/types';
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

  answers: string[] = [];
  currentAnswer: string = "";

  ngOnInit(): void {
    if (quizQuestions) {
      this.currentQuestion = quizQuestions[this.surveyIndex];
    }
  }

  onSelectAnswer(nenType: string) {    
    this.currentAnswer = nenType;
    console.log(this.currentAnswer)
  }

  onContinue(){
    this.answers.push(this.currentAnswer);
    this.surveyIndex += 1;
    this.currentQuestion = quizQuestions[this.surveyIndex];
    this.currentAnswer = ""
    console.log(this.answers)
  }
}
