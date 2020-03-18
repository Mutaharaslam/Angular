import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { CoursesComponent } from './courses/courses.component';
import {AddNewCourseComponent} from './add-new-course/add-new-course.component';
import {EditCourseComponent} from './edit-course/edit-course.component';
import {ViewStudentComponent} from './students-list/view-student/view-student.component';

const routes: Routes = [
  {path : 'addnewStudent', component: AddNewStudentComponent},
  {path : 'edit-student/:id', component: EditStudentComponent},
  {path : 'StudentsList', component: StudentsListComponent},
  {path : 'Courses', component: CoursesComponent},
  {path : 'addnewcourse', component: AddNewCourseComponent},
  {path : 'editcourse/:id', component: EditCourseComponent},
  {path : 'StudentsList/viewStd/:id', component: ViewStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




















