import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentServiceService } from '../services/student-service.service';
import { Student } from '../student-Schema';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.scss']
})

export class AddNewStudentComponent implements OnInit {
  studentForm: any;
  massage = null;

  constructor(private formbulider: FormBuilder, private studentService: StudentServiceService, private router: Router) { }

  ngOnInit() {
    this.studentForm = this.formbulider.group({
      name: ['', Validators.required],
      class: ['', Validators.required],
      age: ['', Validators.required],
      section: ['', Validators.required],
      address: ['', Validators.required],
      courseId: 1
    });
  }
  onFormSubmit() {
    const student = this.studentForm.value;
    this.CreateStudent(student);
    this.studentForm.reset();
    if (this.CreateStudent) {
      this.router.navigate(['/StudentsList']);
    }
  }

  CreateStudent(student: Student) {
    this.studentService.createStudent(student).subscribe(
      () => {
        this.massage = 'Record saved Successfully';
      }
    );
  }
  // Del Student
  // deleteStudent(studentId: string) {
  //   if (confirm('Are you sure you want to delete this ?')) {
  //     this.studentService.deleteStudentById(studentId).subscribe(() => {
  //       this.massage = 'Record Deleted Succefully';
  //       this.studentForm.reset();
  //     });
  //   }
  // }

  resetForm() {
    this.studentForm.reset();
  }
}

