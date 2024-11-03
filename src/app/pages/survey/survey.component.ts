import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { quizQuestions } from '../../../data/quiz';
import { QuizQuestionsProps } from '../../../types/types';
import { QuestionComponent } from '../../components/question/question.component';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [QuestionComponent, CommonModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent implements OnInit {
  questions: QuizQuestionsProps = {} as QuizQuestionsProps;
  currentQuestion: QuizQuestionsProps = {} as QuizQuestionsProps;

  surveyIndex: number = 0;
  totalQuestions: number = 0;

  answers: string[] = [];
  currentAnswer: string = "";

  finished: boolean = false;

  ngOnInit(): void {
    if (quizQuestions) {
      this.currentQuestion = quizQuestions[this.surveyIndex];
      this.totalQuestions = quizQuestions.length
    }
  }

  onSelectAnswer(nenType: string) {    
    this.currentAnswer = nenType;
    console.log(this.currentAnswer)
  }

  onContinue(){
    if(this.surveyIndex === this.totalQuestions){
      this.finished = true;
      return;
    }

    this.answers.push(this.currentAnswer);
    this.surveyIndex += 1;
    this.currentQuestion = quizQuestions[this.surveyIndex];
    this.currentAnswer = ""
    console.log(this.answers)
  }

  onFinish(){

  }
}
