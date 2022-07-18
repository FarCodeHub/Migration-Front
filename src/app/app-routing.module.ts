import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RequestStatusComponent } from './components/request-status/request-status.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path:'', component:QuestionsComponent , data: { animation: 'isLeft' } },
  { path: 'login', component:LoginComponent ,data: { animation: 'isLeft' } },
  { path: 'registration', component:RegistrationComponent ,data: { animation: 'isLeft' } },
  { path: 'questions', component:QuestionsComponent , data: { animation: 'isLeft' } },
  { path: 'sign-up', component:SignUpComponent , data: { animation: 'isLeft' } },
  { path: 'users', component:UsersComponent , data: { animation: 'isLeft' } },
  { path: 'request-status', component:RequestStatusComponent , data: { animation: 'isLeft' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
