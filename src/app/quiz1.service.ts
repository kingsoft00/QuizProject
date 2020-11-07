import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Quiz } from './module-quiz';

@Injectable({
  providedIn: 'root'
})
export class Quiz1Service {

  constructor(private httpClient:HttpClient) { }

  loadQuiz1Details():Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>("http://localhost:3000/leadership");
  }
  loadQuiz2Details():Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>("http://localhost:3001/Biology");
  }
}
