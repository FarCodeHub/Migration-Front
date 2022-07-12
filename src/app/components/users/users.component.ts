import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  rowData : any;
  constructor(private personService:PersonService) {
    this.personService.getPersons().subscribe(x => { this.rowData.push(x.objResult) })
   }
  columnDefs = [{ field: "firstName" }, { field: "lastName" }, { field: "email" }, { field: "country" }, { field: "visaType" }];



  ngOnInit(): void {

  }

}
