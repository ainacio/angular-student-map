// src/app/student.service.ts
import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  buildStudentMap(students: Student[]): Map<string, Student> {
    const studentMap = new Map<string, Student>();
    students.forEach((student) => {
      studentMap.set(student.id, student);
    });
    return studentMap;
  }
}
