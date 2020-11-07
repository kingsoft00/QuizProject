import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoQuiz1():void {
    this.router.navigate(['/quiz1']);
  }
  gotoQuiz2():void{
    this.router.navigate(['/quiz2']);
  }
}
