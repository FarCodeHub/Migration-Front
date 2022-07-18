import { PersonCondition } from './../../../models/person-lawyer';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LawyerModel } from 'src/app/models/lawyer-model';
import { PersonLawyer } from 'src/app/models/person-lawyer';
import { PersonModel } from 'src/app/models/person-model';
import { LawyerService } from 'src/app/services/lawyer.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-lawyer-condition-dialog',
    templateUrl: './lawyer-condition-dialog.component.html',
    styleUrls: ['./lawyer-condition-dialog.component.scss']
})
export class LawyerConditionDialogComponent implements OnInit {

    personLawyer: PersonLawyer[] = [];
    lawyers !: LawyerModel[]
    person !: PersonModel;
    selectedLaywer!: LawyerModel;

    constructor(private lawyerService: LawyerService, public dialogRef: MatDialogRef<LawyerConditionDialogComponent>,
        private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) { }
    ngOnInit(): void {
        //   this.personLawyers.push(this.personLawyer);
        this.person = JSON.parse(this.data.data);
        this.lawyerService.getLawyers().subscribe(item => this.lawyers = item);
    }

    addItem() {
        this.personLawyer.push(<PersonLawyer>{
            personId: this.person.id,
            lawyerId: this.selectedLaywer.id,
            lawyer:this.selectedLaywer,
            personConditions: this.selectedLaywer.conditions.map(x => <PersonCondition>{
                personId: this.person.id,
                title: x.title,
                lawyerConditionId: x.id,
                isSelected: false
            })
        });
    }

    deleteLawyer(item: PersonLawyer) {
        this.personLawyer.splice(this.personLawyer.indexOf(item));
    }

save(){
  this.personLawyer = this.personLawyer.filter(x=>x.personConditions = x.personConditions.filter(x=>x.isSelected == true))
  this.dialogRef.close(this.personLawyer);
}

}
