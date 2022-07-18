import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { User } from 'src/app/models/user';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.scss']
})
export class RequestStatusComponent implements OnInit {

  constructor(private route:ActivatedRoute,private globalService:GlobalService) { }
  status!:number;
  user!:User;
  ngOnInit(): void {

   this.user = this.globalService.loadUser();
  }



}
