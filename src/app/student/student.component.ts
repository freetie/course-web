import { Component, OnInit } from '@angular/core';

interface Student {
  id: number;
  username: string;
  createdAt: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  displayedColumns = ['id', 'username', 'createdAt', 'action'];
  students: Student[] = [];
  querying = false;
  constructor() {}

  ngOnInit(): void {
    this.queryCourses();
  }

  queryCourses() {
    return new Promise((resolve) => {
      this.querying = true;
      setTimeout(() => {
        const testData = [
          {
            id: 1,
            username: 'student1',
            createdAt: '2022-01-01',
          },
          {
            id: 2,
            username: 'student2',
            createdAt: '2022-01-02',
          },
          {
            id: 3,
            username: 'student3',
            createdAt: '2022-01-03',
          },
        ];
        this.students = testData;
        this.querying = false;
        resolve(testData);
      }, 1000);
    });
  }
}
