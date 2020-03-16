import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CourseService} from '../services/course.service';
import {Router} from '@angular/router';
import {Course} from '../courses-schema';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss']
})
export class AddNewCourseComponent implements OnInit {
  courseForm: any;

  constructor(private formbulider: FormBuilder, private courseService: CourseService, private router: Router) {
  }

  ngOnInit() {
    this.createCourseForm();
  }

  createCourseForm() {
    this.courseForm = this.formbulider.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      fee: ['', Validators.required],
      startDate: ['', Validators.required]
    });
  }

  onFormSubmit() {
    const course = this.courseForm.value;
    this.CreateCourse(course);
    this.courseForm.reset();
  }

  CreateCourse(course: Course) {
    this.courseService.createCourse(course).subscribe(response => {
        this.router.navigate(['/Courses']);
      }
    );
  }

}
