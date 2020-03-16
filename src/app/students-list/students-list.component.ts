import {Component, OnInit} from '@angular/core';
import {Student} from '../student-Schema';
import {StudentServiceService} from '../services/student-service.service';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: Student[];

  // selectedStudent: Student;

  constructor(private studentService: StudentServiceService, public router: Router) {
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe((response) => {
      this.students = response;
    });
  }

  // Del Student
  deleteStudent(student: Student) {
    if (confirm('Rre you sure? If yes Then this Student will be deleted from the record')) {
      this.studentService.deleteStudent(student.id).subscribe((response) => {
        this.getStudents();
      });
    }
  }

  // openstudentToEdit(student) {
  //   this.router.navigate(['/editStudent'], {queryParams : {id: student.id}});
  // }
}
