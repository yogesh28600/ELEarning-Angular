import { Component } from '@angular/core';
import { CourseDTO } from '../Models/CourseDTO';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.css',
})
export class ViewCourseComponent {
  courseId: string;
  course!: CourseDTO;
  constructor(
    private routeParam: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.courseId = this.routeParam.snapshot.params['courseId'];
    this.courseService.getCourseById(this.courseId).subscribe((response) => {
      this.course = response;
      this.courseService.getModules().subscribe((response) => {
        this.course.modules = response.filter(
          (x) => x.courseId === this.courseId
        );
      });
    });
  }
}
