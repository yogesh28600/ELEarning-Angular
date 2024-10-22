import { Component } from '@angular/core';
import { UserStorageService } from '../shared/user-storage.service';
import { CourseDTO } from '../Models/CourseDTO';
import { CourseService } from '../course.service';
import { UserDTO } from '../Models/UserDTO';
import { Router } from '@angular/router';
import { User } from '../Types/User';

@Component({
  selector: 'app-trainer-home',
  templateUrl: './trainer-home.component.html',
  styleUrl: './trainer-home.component.css',
})
export class TrainerHomeComponent {
  user!: User;
  myCourses!: CourseDTO[];
  haveCourses: boolean = false;
  constructor(
    private userStorage: UserStorageService,
    private courseService: CourseService,
    private router: Router
  ) {
    this.userStorage.getUser().subscribe((response) => {
      response && (this.user = response);
    });
    if (!this.user) {
      this.router.navigate(['/register']);
    }
    this.courseService.getCourses().subscribe((response) => {
      this.myCourses = response.filter(
        (course) => course.trainerId === this.user.id
      );
      this.myCourses.map((course) => {
        this.courseService.getModules().subscribe((resonse) => {
          course.modules = resonse.filter((c) => c.courseId === course.id);
        });
      });
    });
  }

  deleteCourse(id: string) {
    this.courseService.deleteCourse(id).subscribe();
  }
}
