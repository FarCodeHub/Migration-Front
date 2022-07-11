import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserCommand } from 'src/app/models/create-user-command';
import { GlobalService } from 'src/app/services/global.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public registerForm!: FormGroup;
  createUserCommand !:CreateUserCommand;
  constructor(private _formBuilder: FormBuilder,private userService:UserService, private router: Router,private globalService:GlobalService) { }

  ngOnInit(): void {

    this.registerForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      terms: [true, Validators.required],
    });

  }

  register(){
    this.createUserCommand = <CreateUserCommand>this.registerForm.getRawValue();
    this.userService.add(this.createUserCommand).subscribe(result =>{
     if (result.succeed)
     {
      this.globalService.saveUser(result.objResult);
       this.router.navigate(['/registration']);
      }
    })
  }

  cancel(){
    this.router.navigate(['/login']);
  }

}
