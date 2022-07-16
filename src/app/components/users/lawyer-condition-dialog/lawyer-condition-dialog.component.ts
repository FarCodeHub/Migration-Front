import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Condition } from 'src/app/models/condition';
import { LawyerModel } from 'src/app/models/lawyer-model';
import { PersonLawyers } from 'src/app/models/person-lawyer';
import { PersonModel } from 'src/app/models/person-model';
import { ConditionService } from 'src/app/services/condition.service';
import { LawyerService } from 'src/app/services/lawyer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lawyer-condition-dialog',
  templateUrl: './lawyer-condition-dialog.component.html',
  styleUrls: ['./lawyer-condition-dialog.component.scss']
})
export class LawyerConditionDialogComponent implements OnInit {

    personLawyers:PersonLawyers[]=[];
    personLawyer!:PersonLawyers;
    lawyers !: LawyerModel[]
    form!:FormGroup;
    conditions!:Condition[];
    person!:PersonModel;
    lawyer!:LawyerModel;
    condition!:Condition;


    constructor(private lawyerService:LawyerService,
      private _formBuilder:FormBuilder,
      private conditionService:ConditionService,@Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    this.personLawyers.push(this.personLawyer);

    this.form = new FormGroup({
     personId:new FormControl,
     lawyerId:new FormControl,
     lawyerConditions:new FormArray([])

    })
this.person =  JSON.parse(this.data.data);

    this.lawyerService.getLawyers().subscribe(item=>this.lawyers = item);
  }


onChange(item:number){
  let id = Number(item);
    this.conditionService.getConditionsByLawyerId(id).subscribe(item=>{
      this.conditions = item
    })
}

onCheckboxChange(event:any){
  let id = Number(event.target.value);

  let lawyerId = this.form.get('lawyer')?.value;
  let personId = this.person.id;
  this.personLawyer.personId = personId;
  this.lawyer.id = lawyerId;
  this.condition.id= id
  this.lawyer.conditions.push(this.condition);
  this.personLawyer.lawyers.push(this.lawyer);

}
addItem(){

  this.form.controls['personId'].setValue(this.personLawyer.personId);

  this.form.controls['lawyerConditions'].push(new FormGroup({
    lawyerId: new FormControl(),
    conditions : new FormControl()
  }))
  this.personLawyers.push(this.personLawyer);

}
}
