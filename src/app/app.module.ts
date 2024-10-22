import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { LearnerHomeComponent } from './learner-home/learner-home.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { LoginComponent } from './login/login.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HomeComponent } from './home/home.component';
import { ModuleFormComponent } from './module-form/module-form.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { ViewCourseComponent } from './view-course/view-course.component';

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
    HomeComponent,
    ModuleFormComponent,
    ViewCoursesComponent,
    ViewCourseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
