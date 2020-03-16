import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {StudentServiceService} from '../services/student-service.service';
import {Student} from '../student-Schema';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})

export class EditStudentComponent implements OnInit {
  student: Student;
  id: number;

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
              private router: Router) {
  }

  ngOnInit() {
    this.getStudent();
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


}
