import {Component, OnInit, Output} from '@angular/core';
import {StudentServiceService} from '../services/student-service.service';
import {Student} from '../student-Schema';
import {CourseService} from '../services/course.service';
import {Course} from '../courses-schema';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {ViewStudentComponent} from './view-student/view-student.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: Student[];
  courses: Course[];

  constructor(private studentService: StudentServiceService, public router: Router, private courseService: CourseService) {
  }

  ngOnInit() {
    this.getStudents();
    this.getCourses();
  }

  getStudents() {
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

  getCourses() {
    this.courseService.getCourses().subscribe((response) => {
      this.courses = response;
    });
  }

  // openstudentToEdit(student) {
  //   this.router.navigate(['/editStudent'], {queryParams : {id: student.id}});
  // }

  viewStudent(studentID) {
    this.router.navigateByUrl(`StudentsList/viewStd/${studentID.id}`, { state: { student: studentID } });
  //
  //   if (studentID) {
  //     console.log(this.students);
  //
  //     for (let i = 0; i <= this.students.length; i++) {
  //       if (this.students[i].id === studentID) {
  //             console.log(this.students[i]);
  //             return this.students[i];
  //       }
  //     }
  //
  //   }
  }

}
