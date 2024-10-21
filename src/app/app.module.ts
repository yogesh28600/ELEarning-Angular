import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { LearnerHomeComponent } from './learner-home/learner-home.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { LoginComponent } from './login/login.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LearnerHomeComponent,
    TrainerHomeComponent,
    LoginComponent,
    CourseFormComponent,
    CourseDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
