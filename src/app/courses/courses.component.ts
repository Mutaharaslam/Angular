import {Component, OnInit} from '@angular/core';
import {Course} from '../courses-schema';
import {CourseService} from '../services/course.service';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(private courseService: CourseService, public router: Router) {
  }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe((response) => {
      this.courses = response;
    });
  }

  // Del Course
  deleteCourse(course: Course) {
    this.courseService.deleteCourse(course.id).subscribe((response) => {
      this.getCourses();
    });
  }

}
