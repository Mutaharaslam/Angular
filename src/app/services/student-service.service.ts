import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../student-Schema';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private stdAPI = 'https://sis-rest-api.herokuapp.com/api/students';  // URL to web api

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.stdAPI);
  }

  getStudent(id: number): Observable<Student> {
    const studentDetailURL = `${this.stdAPI}/${id}`;
    return this.http.get<Student>(studentDetailURL);
  }

  createStudent(student: Student): Observable<Student> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<Student>(this.stdAPI, student, httpOptions);
  }

  updateStudent(student: Student): Observable<Student> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.put<Student>(this.stdAPI, student, httpOptions);
  }

  deleteStudentById(id: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.delete<number>(this.stdAPI + '/DeleteStudentDetails?id=' + id,
      httpOptions);
  }

}
