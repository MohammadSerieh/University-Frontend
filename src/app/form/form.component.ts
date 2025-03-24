import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApplicationsDto } from './form.state';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  universities: Observable<any[]>;
  colleges: any[] = [];
  majors: any[] = [];

  
  
  applicationData: ApplicationsDto = {
    applicationNumber: 0,
    applicationType: true,
    fullName: '',
    fullNameEn: '',
    appID: '',
    universityId: null,
    universityNumber: null,
    collegeId: null,
    majorId: null,
    semesterGPA: null,
    overallGPA: null,
    highSchoolScore: null,
    highSchoolGraduationDate: '',
    universityGrantID: null,
    universityGrantDate: null,
    grantRateLimit: 0,
    nationalityCategory: null
  };


  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.fetchUniversities();
    this.fetchColleges();
    this.fetchMajors();
  }

  fetchUniversities() {
    this.universities=this.studentService.getUniversities();
  }

  fetchColleges() {
    this.studentService.getColleges().subscribe((data: any) => {
      this.colleges = data;
    });
  }

  fetchMajors() {
    this.studentService.getMajors().subscribe((data: any) => {
      this.majors = data;
    });
  }

  submitForm() {
    // Call the service method to save the data in the backend.
    this.studentService.submitStudentData(this.applicationData).subscribe(
      response => {
        alert('Application saved successfully!');
        // Optionally reset the form here.
      },
      error => {
        console.error('Error saving application:', error);
        alert('There was an error saving your application.');
      }
    );
  }
}