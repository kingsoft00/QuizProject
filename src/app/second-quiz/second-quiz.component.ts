import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz } from '../module-quiz';
import { Quiz1Service } from '../quiz1.service';

@Component({
  selector: 'app-second-quiz',
  templateUrl: './second-quiz.component.html',
  styleUrls: ['./second-quiz.component.css']
})
export class SecondQuizComponent implements OnInit {

  quiz2Info:Quiz[] = [];
  position:number = 0;
  choiceAnswer:string[]=["","","","","","","",""];
  rightAnsCount:number = 0;
  result:number = 0.0;
  resultMsg:string;
  reviewString:string;
  reviewAll:string[][] = [[],[],[],[],[],[],[],[]]

  constructor(private quiz1Service:Quiz1Service, private router: Router) { }
  quizForm = new FormGroup({
      choice:new FormControl()
  })

  ngOnInit(): void {
    this.loadQuiz2();
  }
  loadQuiz2():void {
    this.quiz1Service.loadQuiz2Details().subscribe(data=>this.quiz2Info=data);
  }

  nextButton():void {
    this.choiceAnswer[this.position] = this.quizForm.get('choice').value;
    console.log(this.choiceAnswer[this.position+1]);
    if (this.choiceAnswer[this.position+1] == null){
      this.quizForm.reset('choice');
    } else {
      this.quizForm.patchValue({choice:this.choiceAnswer[this.position+1]});
    }
    this.position += 1;
  }

  previousButton():void{
    this.choiceAnswer[this.position] = this.quizForm.get('choice').value ;
    this.quizForm.patchValue({choice:this.choiceAnswer[this.position-1]});
    this.reviewString = "";
    this.position -= 1;
  }
  reviewAns():void{
    this.reviewString = "";
    this.choiceAnswer[this.position] = this.quizForm.get('choice').value;
    for (let j = 0; j < this.choiceAnswer.length; j++) {
      this.reviewAll[j][0] = this.quiz2Info[j].question;
      if (this.choiceAnswer[j] == "a") {
        this.reviewAll[j][1] = this.quiz2Info[j].a;
      } else if (this.choiceAnswer[j] == "b"){
        this.reviewAll[j][1] = this.quiz2Info[j].b;
      } else if (this.choiceAnswer[j] == "c"){
        this.reviewAll[j][1] = this.quiz2Info[j].c;
      } else if (this.choiceAnswer[j] == "d"){
        this.reviewAll[j][1] = this.quiz2Info[j].d;
      } else {
        this.reviewAll[j][1] = "No answer";
      }
    }
    for (let i = 0; i < this.choiceAnswer.length; i++) {
          this.reviewString += `${this.quiz2Info[i].question}. `;
          if (this.choiceAnswer[i] == "a") {
            this.reviewString += `Your answer: ${this.quiz2Info[i].a}'\n'`;
          } else if (this.choiceAnswer[i] == "b"){
            this.reviewString += `Your answer: ${this.quiz2Info[i].b}'\n'`;
          } else if (this.choiceAnswer[i] == "c"){
            this.reviewString += `Your answer: ${this.quiz2Info[i].c}'\n'`;
          } else if (this.choiceAnswer[i] == "d"){
            this.reviewString += `Your answer: ${this.quiz2Info[i].d}'\n'`;
          } else {
            this.reviewString += "Your answer: No answer'\n'";
          }
        }
        alert(this.reviewString); 
    
  }
  nextStep():void {
    if (this.result < 80) {
      if(confirm("Do you want to retake this quiz because you did not pass the quiz??")) {
        this.position = 0;
        this.choiceAnswer = ["","","","","","","",""];
        this.result = 0.0;
        this.resultMsg = "";
        this.reviewAll = [[],[],[],[],[],[],[],[]]
        this.rightAnsCount = 0;
        this.reviewString = "";
        this.quizForm.reset('choice');
        this.router.navigate(['/quiz2']);
      } else {
        this.router.navigate(['/home']);
      }
    } else if (this.result >= 80) {
        if(confirm("Do you want to take the other quiz?")) {
          this.router.navigate(['/quiz1']);
    }   else {
          this.router.navigate(['/home']);
    }
}
  }
  results():void {
    if (this.choiceAnswer.length = 7) {
    this.choiceAnswer[this.position] = this.quizForm.get('choice').value;
    this.position += 1;
  } else if (this.choiceAnswer.length = 8) {
    this.position += 1;
  } else {
    this.choiceAnswer[this.position] = this.quizForm.get('choice').value;
    console.log(this.choiceAnswer[this.position+1]);
    if (this.choiceAnswer[this.position+1] == null){
      this.quizForm.reset('choice');
    } else {
      this.quizForm.patchValue({choice:this.choiceAnswer[this.position+1]});
    }
    this.position += 1;
  }
    if(confirm("Do you want to submit your quiz?")) {
      for (let i in this.quiz2Info) {
        if (this.quiz2Info[i].right_answer == this.choiceAnswer[i]){
          this.rightAnsCount += 1;
        }
      }
      this.result = this.rightAnsCount/(this.quiz2Info.length)*100;
      this.resultMsg = "You chose "+this.rightAnsCount+" right answers. Or you completed "+this.result+"% of the quiz";
      alert(this.resultMsg);
      this.nextStep();
  }
}
}

