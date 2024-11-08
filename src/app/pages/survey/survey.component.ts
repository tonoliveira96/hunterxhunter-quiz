import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { quizQuestions } from '../../../data/quiz';
import { QuizQuestionsProps } from '../../../types/types';
import { getNenTypeName } from '../../../utils/nen';

declare let gtag: Function;
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

  answers: string[] = [];
  currentAnswer: string = "";

  finished: boolean = false;

  ngOnInit(): void {
    if (quizQuestions) {
      this.currentQuestion = quizQuestions[this.surveyIndex];
      this.totalQuestions = quizQuestions.length;
    }
  }

  onSelectAnswer(nenType: string) {
    this.currentAnswer = nenType;
    this.onContinue();
  }

  onContinue() {
    this.surveyIndex += 1;

    if (this.totalQuestions > this.surveyIndex) {
      if (this.currentAnswer) this.answers.push(this.currentAnswer.toString());
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

    if (result) {
      localStorage.setItem("@hxhquiz:", result.toString());

      let nenType = getNenTypeName(Number(result));
      this.trackButtonClick(nenType);
    }

    this.route.navigate(['result']);
  }

  trackButtonClick(value: string) {
    gtag('event', 'finish_quiz', {
      value: value
    });
  }
}
