import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path : 'addnewStudent', component: AddNewStudentComponent},
  {path : 'editStudent', component: EditStudentComponent},
  {path : 'StudentsList', component: StudentsListComponent},
  {path : 'Courses', component: CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




















