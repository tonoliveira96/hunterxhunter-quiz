import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { quizQuestions } from '../../../data/quiz';
import { QuizQuestionsProps } from '../../../types/types';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './survey.component.html',
})
export class SurveyComponent implements OnInit {
  private route = inject(Router);
  
  questions: QuizQuestionsProps = {} as QuizQuestionsProps;
  currentQuestion: QuizQuestionsProps = {} as QuizQuestionsProps;

  surveyIndex: number = 0;
  totalQuestions: number = 0;

  answers: number[] = [];
  currentAnswer: number | null = null;

  finished: boolean = false;

  ngOnInit(): void {
    if (quizQuestions) {
      this.currentQuestion = quizQuestions[this.surveyIndex];
      this.totalQuestions = quizQuestions.length;
    }
  }

  onSelectAnswer(nenType: number) {
    this.currentAnswer = nenType;
    this.onContinue();
  }

  onContinue() {
    this.surveyIndex += 1;

    if (this.totalQuestions > this.surveyIndex) {
      if (this.currentAnswer) this.answers.push(this.currentAnswer);
      this.currentQuestion = quizQuestions[this.surveyIndex];
    } else {
      this.finished = true;
    }
  }

  async onFinish() {
    const result = this.answers.reduce((prev, current, index, array) => {
      if (array.filter(item => item === prev).length > array.filter(item => item === current).length) {
        return prev;
      } else {
        return current;
      }
    });
    console.log(this.answers)
    console.log(result)
    localStorage.setItem("@hxhquiz:", result.toString())
    this.route.navigate(['result'])
  }
}
