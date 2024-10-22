import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LearnerHomeComponent } from './learner-home/learner-home.component';
import { LoginComponent } from './login/login.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HomeComponent } from './home/home.component';
import { ModuleFormComponent } from './module-form/module-form.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { BrowseCoursesComponent } from './browse-courses/browse-courses.component';
import { EnrollCourseComponent } from './enroll-course/enroll-course.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'learner', component: LearnerHomeComponent },
  { path: 'trainer', component: TrainerHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-course', component: CourseFormComponent },
  { path: 'course-details/:courseId', component: CourseDetailsComponent },
  { path: '', component: HomeComponent },
  { path: 'create-module/:courseId', component: ModuleFormComponent },
  { path: 'view-course/:courseId', component: ViewCourseComponent },
  { path: 'browse-courses', component: BrowseCoursesComponent },
  { path: 'enroll-course/:courseId', component: EnrollCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
