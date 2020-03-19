import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {StudentServiceService} from '../../services/student-service.service';
import {Student} from '../../student-Schema';
import {CourseService} from '../../services/course.service';
import {Course} from '../../courses-schema';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  students: Student;
  id: number;

  constructor(private studentService: StudentServiceService,
              private route: ActivatedRoute,
              private coursesService: CourseService
  ) {}

  ngOnInit() {
    this.getStudent();
  }

  getStudent() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(this.id).subscribe({
      next: (std) => {
        this.students = std;
        console.log(this.students);
      }
    });
  }

  // getCourse() {
  //   this.id = +this.route.snapshot.paramMap.get('id');
  //   this.coursesService.getCourse(this.id).subscribe({
  //     next: (std) => {
  //       this.courses = std;
  //       console.log(this.courses);
  //     }
  //   });
  // }
}
