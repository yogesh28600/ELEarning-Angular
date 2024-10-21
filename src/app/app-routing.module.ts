import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LearnerHomeComponent } from './learner-home/learner-home.component';
import { LoginComponent } from './login/login.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'learner', component: LearnerHomeComponent },
  { path: 'trainer', component: TrainerHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-course', component: CourseFormComponent },
  { path: 'course-details/:courseId', component: CourseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
