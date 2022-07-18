import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceResult } from 'src/app/models/service-result';
import { User } from 'src/app/models/user';
import { GlobalService } from 'src/app/services/global.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [ forbiddenNameValidator(/bob/i)]),
    password: new FormControl(),
  });
  constructor(fb: FormBuilder , private router: Router , private userService:UserService,private globalService:GlobalService) {
    this.loginForm = fb.group({
      userName:["",Validators.required],
      password:["",Validators.required]
    })
   }

  ngOnInit(): void {
  }


  login() {
    // this.userService.getUser(this.loginForm.get("username")?.value,this.loginForm.get("password")?.value).subscribe((result:any)=>{
    //   return result;
    // })
  }


  signUp(){

      this.router.navigate(['/sign-up']);

  }

singIn(){
  let user = {userName:String , password:String}
  user.userName = this.loginForm.get("userName")?.value;
  user.password = this.loginForm.get("password")?.value;

  if (this.loginForm.get("userName")?.value == "admin" && this.loginForm.get("password")?.value == "123456")
  this.router.navigate(['/users']);

  this.userService.getUser(user).subscribe((result:ServiceResult<User>)=>{
    if (result.succeed)
    {
      this.globalService.saveUser(result.objResult);
      if (result.objResult.status == 0)
      this.router.navigate(['/registration']);
      else
    this.router.navigate(['/request-status']);
    }

  })
}

}
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

