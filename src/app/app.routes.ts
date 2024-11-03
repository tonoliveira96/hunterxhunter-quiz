import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { SurveyComponent } from './pages/survey/survey.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'survey',
    component: SurveyComponent
  },
   {
    path: 'result',
    component: ResultComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
