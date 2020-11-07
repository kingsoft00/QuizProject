import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { applicationRoutes } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { SecondQuizComponent } from './second-quiz/second-quiz.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Quiz1Service } from './quiz1.service';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    SecondQuizComponent,
    Quiz1Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }