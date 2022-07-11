import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(private router: Router) { }
  visaTypes :any = ["Your Visa Type","Student","Temporary agricultural worker" , "Temporary worker","Tourism","Vacation","Pleasure visitor"];

  ngOnInit(): void {
  }

  next(){
    this.router.navigate(['/login']);
  }

}
