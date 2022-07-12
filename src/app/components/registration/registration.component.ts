import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { PersonService } from 'src/app/services/person.service';
import { CreatePersonCommand } from 'src/app/models/create-person-command';
import { GlobalService } from 'src/app/services/global.service';
import { useAnimation } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  createPersonCommand!:CreatePersonCommand;
  @ViewChild('fileUpload', { static: false }) fileUpload!: ElementRef;
  files = [];
  title = 'Migration';
  uploadedFile: { progressStatus: '' | 'in-progress' | 'uploaded', progress: number, filePath: string, fullFilePath: string, extention: string } = {
    progressStatus: '',
    progress: 0,
    filePath: '',
    fullFilePath: '',
    extention: '',
  };

  isLinear = true;
  formGroup!: FormGroup ;
  countryList : any = ["Your Country","USA","Spain","Japon","Iran","Canada"];
  marriedStatus :any = ["Married Status ?","Married","Single"];
  visaTypes :any = ["Your Visa Type","Student","Temporary agricultural worker" , "Temporary worker","Tourism","Vacation","Pleasure visitor"];
  visaStatus :any = ["Your Visa Sattus","Religious Worker Visa","Crew D Visa","Domestic Employee Visa" , "Media and Journalist Visa"]
  isDone = false;


  constructor(private _formBuilder: FormBuilder,private uploadFileService: UploadFileService,private router: Router,
    private personService:PersonService,
    private globalService:GlobalService) {}

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email :['', Validators.required],
      phoneNumber :['', Validators.required],
      isMarried : [this.marriedStatus[0], Validators.required],
      country :[this.countryList[0],Validators.required],
      visaType : [this.visaTypes[0],Validators.required],
      visaStatus :  [this.visaStatus[0],Validators.required],
      visaExpirationDate :[Date(),Validators.required],
      filePath : ['', Validators.required],
    });

  }

  ngAfterViewInit(): void {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      const file = fileUpload.files[0];
      this.uploadFile({ data: file, inProgress: false, progress: 0 });

    };
  }

  submit(){
      console.log(this.formGroup.value);

  }

  onClickUpload() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.click();
  }


  uploadFile(file:any) {
    let formData = new FormData();
    formData.set('file', file.data);
    let user = this.globalService.loadUser();
    formData.append('userId', user.id);
    this.uploadedFile.progressStatus = 'in-progress';
    this.uploadFileService
      .upload(formData)
      .pipe(map((event:any) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.uploadedFile.progress = Math.round(
              (event.loaded * 100) / event.total
            );
            break;
          case HttpEventType.Response:
            let fileName = event.body.objResult;
            this.formGroup.get('filePath')?.setValue(fileName.fileName);
            this.uploadedFile.extention = fileName.split(".")[1].toUpperCase();
            this.uploadedFile.filePath = fileName;
            this.uploadedFile.fullFilePath = `${environment.imageUrl}` + "/" + fileName;
            this.uploadedFile.progressStatus = 'uploaded';
            // console.log("File Uploaded" + this.extentionFile + " " + fileName);
            return fileName;
        }
      }),
        catchError((error: HttpErrorResponse) => {
          file.inProgress = false;
          return of(`${file.data.name} upload failed.`);
        })
      )
      .subscribe((event: any) => {
        if (typeof event === 'object') {
          console.log(event.body);
        }
      });
  }

  removeImage() {
    this.formGroup.get('filePath')?.setValue('');
    this.uploadedFile = {
      progressStatus: '',
      progress: 0,
      filePath: '',
      fullFilePath: '',
      extention: '',
    };
  }
  isFileImage() {
    return ['PNG', 'JPG', 'JPEG'].includes(this.uploadedFile.extention);
  }

  save(){
    this.createPersonCommand = <CreatePersonCommand>this.formGroup.getRawValue();
    let user = this.globalService.loadUser();
    this.createPersonCommand.userId = user.id;
    this.personService.add(this.createPersonCommand).subscribe(result =>{
        if(result.succeed)
          this.isDone = true;

     })
  }
  done(){
    this.router.navigate(['/login']);
  }

}
