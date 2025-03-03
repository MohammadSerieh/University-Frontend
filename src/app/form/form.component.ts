import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  universities: any[] = [];
  colleges: any[] = [];
  majors: any[] = [];

  studentData = {
    studentId: '',
    studentName: '',
    university: '',
    college: '',
    major: '',
    highSchoolScore: '',
    grantOrderNumber: '',
    grantRate: '',
    grantDate: '',
    highSchoolGraduationDate: '', // ✅ Add this property
    academicLevel: ''
  };


  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.fetchUniversities();
    this.fetchColleges();
    this.fetchMajors();
  }

  fetchUniversities() {
    this.studentService.getUniversities().subscribe((data: any) => {
      this.universities = data;
    });
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
    this.studentService.submitStudentData(this.studentData).subscribe(response => {
      alert('Data submitted successfully!');
    }, error => {
      alert('Error submitting data');
    });
  }
}