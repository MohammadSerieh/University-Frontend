import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:5189/api'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  // Get universities
  getUniversities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetUniversity`);
  }

  // Get colleges
  getColleges(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getCollege`);
  }

  // Get majors
  getMajors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetMajor`);
  }

  // Submit Student Form Data
  submitStudentData(studentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddOrUpdateApplication`, studentData);
  }
}
