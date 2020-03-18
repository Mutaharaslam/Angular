import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ViewCourseComponent } from './courses/view-course/view-course.component';
import { ViewStudentComponent } from './students-list/view-student/view-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    AddNewStudentComponent,
    EditStudentComponent,
    CoursesComponent,
    AddNewCourseComponent,
    EditCourseComponent,
    ViewCourseComponent,
    ViewStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
