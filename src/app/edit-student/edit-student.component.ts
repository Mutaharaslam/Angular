import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {StudentServiceService} from '../services/student-service.service';
import {CourseService} from '../services/course.service';
import {Student} from '../student-Schema';
import {Course} from '../courses-schema';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})

export class EditStudentComponent implements OnInit {
  student: Student;
  id: number;
  courses: Course[];

  studentEditForm = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    class: ['', Validators.required],
    section: ['', Validators.required],
    address: ['', Validators.required],
    courseId: ['', Validators.required]
  });

  constructor(private studentService: StudentServiceService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private courseService: CourseService,
              private router: Router) {
  }

  ngOnInit() {
    this.getStudent();
    this.getCourses();
  }
  getStudent() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(this.id).subscribe({
      next: (std) => {
        this.student = std;
        this.studentEditForm.patchValue(std);
        console.log(this.studentEditForm.value);
      }
    });
  }

  editStudentform() {
    this.studentService.updateStudent(this.id, this.studentEditForm).subscribe( res => {
      this.router.navigate(['/StudentsList']);
    });
  }

  getCourses() {
    this.courseService.getCourses().subscribe((response) => {
      this.courses = response;
    });
  }


}
