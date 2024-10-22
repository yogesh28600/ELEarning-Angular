import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../shared/user-storage.service';
import { User } from '../Types/User';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDTO } from '../Models/CourseDTO';
import { CourseService } from '../course.service';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.component.html',
  styleUrl: './enroll-course.component.css',
})
export class EnrollCourseComponent implements OnInit {
  user: User | null = null;
  course: CourseDTO | null = null;
  constructor(
    private userStorage: UserStorageService,
    private router: Router,
    private acRouter: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {
    let id: string = acRouter.snapshot.params['courseId'];
    this.courseService.getCourseById(id).subscribe((response) => {
      this.course = response;
    });
  }
  ngOnInit(): void {
    this.userStorage.getUser().subscribe((user) => {
      this.user = user; // Update user when it changes
    });
    if (!this.user) {
      this.router.navigate(['/register']);
    }
  }
  checkout() {
    if (this.user && this.course) {
      let date = new Date();
      let enrollment = {
        learnerId: this.user.id,
        courseId: this.course.id,
        category: this.course.category,
        amountPaid: this.course.price,
      };
      console.log(enrollment);
      this.enrollmentService
        .createEnrollment(enrollment)
        .subscribe((response) => {
          if (response) {
            this.router.navigate(['/learner']);
          }
        });
    }
  }
}
