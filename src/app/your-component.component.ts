// src/app/your-component.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.css'],
})
export class YourComponent implements OnInit {
  studentMap: Map<string, Student> = new Map(); // Use Map instead of array

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    const chineseLastNames = ['Li', 'Wang', 'Chen', 'Zhang', 'Liu', 'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou'];
    const portugueseLastNames = ['Silva', 'Santos', 'Oliveira', 'Pereira', 'Fernandes', 'Costa', 'Rodrigues', 'Martins', 'Gomes', 'Almeida'];
    const southAfricanLastNames = ['Mokoena', 'Nkosi', 'Van der Merwe', 'Botha', 'Swanepoel', 'Smit', 'Mkhize', 'Ndlovu', 'Jansen', 'De Klerk'];
    const cubanLastNames = ['González', 'Rodríguez', 'López', 'Martínez', 'Pérez', 'Hernández', 'Gómez', 'Díaz', 'Torres', 'Alvarez'];

    const chineseFirstNames = ['Wei', 'Xiao', 'Chen', 'Ming', 'Jing', 'Li', 'Mei', 'Yu', 'Jun', 'Xin'];
    const portugueseFirstNames = ['Ana', 'João', 'Maria', 'Pedro', 'Inês', 'Miguel', 'Sofia', 'Tiago', 'Carolina', 'Rui'];
    const southAfricanFirstNames = ['Thabo', 'Naledi', 'Bongani', 'Anele', 'Zanele', 'Mpho', 'Sipho', 'Lerato', 'Tshepo', 'Siyabonga'];
    const cubanFirstNames = ['Alejandro', 'Isabella', 'Luis', 'Carmen', 'Antonio', 'Elena', 'Javier', 'Sofia', 'Mateo', 'Camila'];

    this.generateRandomStudents([
      { id: '1', firstNames: chineseFirstNames, lastNames: chineseLastNames },
      { id: '2', firstNames: portugueseFirstNames, lastNames: portugueseLastNames },
      { id: '3', firstNames: southAfricanFirstNames, lastNames: southAfricanLastNames },
      { id: '4', firstNames: cubanFirstNames, lastNames: cubanLastNames },
    ], 100);
  }

  private generateRandomStudents(countries: { id: string; firstNames: string[]; lastNames: string[] }[], count: number): void {
    for (let i = 0; i < count; i++) {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      const randomFirstName = randomCountry.firstNames[Math.floor(Math.random() * randomCountry.firstNames.length)];
      const randomLastName = randomCountry.lastNames[Math.floor(Math.random() * randomCountry.lastNames.length)];

      const student: Student = { id: `${i + 1}`, name: `${randomFirstName} ${randomLastName}` };
      this.studentMap.set(student.id, student);
    }
  }
}
