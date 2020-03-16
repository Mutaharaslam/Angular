import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../courses-schema';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseURL = 'https://sis-rest-api.herokuapp.com/api/courses';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseURL);
  }

  getCourse(id: number): Observable<Course> {
    const courseDetailURL = `${this.courseURL}/${id}`;
    return this.http.get<Course>(courseDetailURL);
  }

  createCourse(course: Course): Observable<Course> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<Course>(this.courseURL, course, httpOptions);
  }

  updateCourse(id: number, course): Observable<Course> {
    const courseDetail = course.value;
    const url = `${this.courseURL}/${id}`;
    return this.http.put<Course>(url, courseDetail);
  }


  deleteCourse(id: number): Observable<Course> {
    if (confirm('Rre you sure? If yes Then this Course will be deleted from the record')) {
      const courseDetailurl = `${this.courseURL}/${id}`;
      return this.http.delete<Course>(courseDetailurl);
    }
  }

}
