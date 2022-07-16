import { Component, Inject, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/models/person-model';
import { PersonService } from 'src/app/services/person.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AcceptRequestDialogComponent } from './accept-request-dialog/accept-request-dialog.component';
import { LawyerConditionDialogComponent } from './lawyer-condition-dialog/lawyer-condition-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dataSource : PersonModel[]=[];

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'country',"visaType","visaStatus","action"];
  constructor(private personService:PersonService,public dialog: MatDialog) {

   }
  // columnDefs = [
  // { field: "firstName" },
  //  { field: "lastName" },
  //   { field: "email" },
  //    { field: "country" },
  //     { field: "visaType" },
  //      { field: "visaStatus" },
  //     {field:"Actions",      icons: {
  //       sortAscending: '<i class="fa fa-sort-alpha-up"/>',
  //       sortDescending: '<i class="fa fa-sort-alpha-down"/>',
  //     },}];



  ngOnInit(): void {
    this.personService.getPersons().subscribe((item:any) => {
      return this.dataSource = item
    })
  }

  isRejected(person:PersonModel){


      const dialogRef = this.dialog.open(AcceptRequestDialogComponent, {
        width: '250px',
        data: { },
      });

      dialogRef.afterClosed().subscribe(result => {
if (result){
  this.personService.isRejected(person.id).subscribe(item=>{
    if (item.succeed)
    this.personService.getPersons().subscribe((item:any) => {
      return this.dataSource = item
    })
  })
}

      });

  }

  isApproved(person:PersonModel){
    const dialogRef = this.dialog.open(LawyerConditionDialogComponent,{
      width:'40%',
      height:'40%',
      data: {data:JSON.stringify(person)},
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  }


