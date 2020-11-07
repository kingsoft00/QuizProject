import { Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { SecondQuizComponent } from './second-quiz/second-quiz.component';

export const applicationRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //to prevent the page reload
  {path: 'home', component: HomeComponent},
  {path: 'quiz1', component: Quiz1Component},
  {path: 'quiz2', component: SecondQuizComponent}
]

