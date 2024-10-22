import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../shared/user-storage.service';
import { User } from '../Types/User';
import { CourseDTO } from '../Models/CourseDTO';
import { CourseService } from '../course.service';
import { EnrollmentService } from '../enrollment.service';
import { EnrollmentDTO } from '../Models/EnrollmentDTO'; // Import EnrollmentDTO if not already

@Component({
  selector: 'app-learner-home',
  templateUrl: './learner-home.component.html',
  styleUrl: './learner-home.component.css',
})
export class LearnerHomeComponent implements OnInit {
  courses: CourseDTO[] = [];
  enrolledCourses: CourseDTO[] = []; // To store only the enrolled courses
  enrollments: EnrollmentDTO[] = []; // To store the enrollments
  user: User | null = null;

  constructor(
    private courseService: CourseService,
    private userStorage: UserStorageService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    // Get the user
    this.userStorage.getUser().subscribe((user) => {
      this.user = user;
      if (this.user) {
        // Once user is available, load enrollments
        this.loadEnrollmentsAndCourses();
      }
    });
  }

  loadEnrollmentsAndCourses(): void {
    // Fetch all courses
    this.courseService.getCourses().subscribe((coursesResponse) => {
      this.courses = coursesResponse;

      // Fetch all enrollments for this user
      this.enrollmentService
        .getEnrollments()
        .subscribe((enrollmentResponse) => {
          this.enrollments = enrollmentResponse.filter(
            (enrollment) => enrollment.learnerId === this.user?.id
          );

          // Filter courses based on enrollments
          this.enrolledCourses = this.courses.filter((course) =>
            this.enrollments.some(
              (enrollment) => enrollment.courseId === course.id
            )
          );

          // Now populate the modules for the enrolled courses
          this.courseService.getModules().subscribe((moduleResponse) => {
            this.enrolledCourses.forEach((course) => {
              course.modules = moduleResponse.filter(
                (module) => module.courseId === course.id
              );
            });
          });
        });
    });
  }
}
