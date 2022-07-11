import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path:'', component:QuestionsComponent , data: { animation: 'isLeft' } },
  { path: 'login', component:LoginComponent ,data: { animation: 'isLeft' } },
  { path: 'registration', component:RegistrationComponent ,data: { animation: 'isLeft' } },
  { path: 'questions', component:QuestionsComponent , data: { animation: 'isLeft' } },
  { path: 'sign-up', component:SignUpComponent , data: { animation: 'isLeft' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
