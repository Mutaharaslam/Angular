import { Component, OnInit } from '@angular/core';
import { Student } from '../student-Schema';
import { StudentServiceService } from '../services/student-service.service';
// import { SoliderCommunicationService } from '../solider-communication.service';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: Student[];
  // selectedStudent: Student;

  constructor(private studentService: StudentServiceService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe((response) => {
      this.students = response;
    });
  }

  onSelect(student) {
    // this.selectedStudent = student;
  }

}
