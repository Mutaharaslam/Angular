import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CourseService} from '../services/course.service';
import {Course} from '../courses-schema';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})

export class EditCourseComponent implements OnInit {
  course: Course;
  id: number;

  courseEditForm = this.formBuilder.group({
    name: ['', Validators.required],
    duration: ['', Validators.required],
    fee: ['', Validators.required],
    startDate: ['', Validators.required]
  });

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.getCourse();
  }

  getCourse() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(this.id).subscribe({
      next: (std) => {
        this.course = std;
        this.courseEditForm.patchValue(std);
        console.log(this.courseEditForm.value);
      }
    });
  }

  editCourseform() {
    this.courseService.updateCourse(this.id, this.courseEditForm).subscribe( res => {
      this.router.navigate(['/Courses']);
    });
  }


}
