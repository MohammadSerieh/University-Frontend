import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:5189/api'; 

  constructor(private http: HttpClient) { }

  
  getUniversities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetUniversity`);
  }


  getColleges(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getCollege`);
  }


  getMajors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetMajor`);
  }

  
  submitStudentData(studentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddOrUpdateApplication`, studentData);
  }
}
