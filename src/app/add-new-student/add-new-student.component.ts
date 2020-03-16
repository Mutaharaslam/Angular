import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {StudentServiceService} from '../services/student-service.service';
import {Student} from '../student-Schema';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.scss']
})

export class AddNewStudentComponent implements OnInit {
  studentForm: any;
  massage = null;

  constructor(private formbulider: FormBuilder, private studentService: StudentServiceService, private router: Router) {
  }

  ngOnInit() {
    this.studentForm = this.formbulider.group({
      courseId: ['', Validators.required],
      name: ['', Validators.required],
      class: ['', Validators.required],
      age: ['', Validators.required],
      section: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onFormSubmit() {
    const student = this.studentForm.value;
    this.CreateStudent(student);
    this.studentForm.reset();
  }

  CreateStudent(student: Student) {
    this.studentService.createStudent(student).subscribe(response => {
      this.router.navigate(['/StudentsList']);
      }
    );
  }

  resetForm() {
    this.studentForm.reset();
  }
}

