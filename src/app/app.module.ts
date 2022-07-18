import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { QuestionsComponent } from './components/questions/questions.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UsersComponent } from './components/users/users.component';
import { AgGridModule } from 'ag-grid-angular';
import { AcceptRequestDialogComponent } from './components/users/accept-request-dialog/accept-request-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LawyerConditionDialogComponent } from './components/users/lawyer-condition-dialog/lawyer-condition-dialog.component';
import { RequestStatusComponent } from './components/request-status/request-status.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        QuestionsComponent,
        SignUpComponent,
        UsersComponent,
        AcceptRequestDialogComponent,
        LawyerConditionDialogComponent,
        RequestStatusComponent,



    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatSelectModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatIconModule,
        MatProgressBarModule,
        MatTooltipModule,
        HttpClientModule,
        AgGridModule,
        MatTableModule,
        MatDialogModule,
        MatCheckboxModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
