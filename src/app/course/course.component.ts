import { Component, OnInit } from '@angular/core';

interface Course {
  title: string;
  desc: string;
  picture: string;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
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
            title: 'HTML & CSS',
            desc: 'Webページの見た目をつくる言語',
            picture:
              'https://ddb6ltykpq547.cloudfront.net/language/1/icon_for_web/2157d1e7aa48b6d370b46ad6c2c71732',
          },
          {
            title: 'JavaScript',
            desc: '多様な可能性を秘めたフロントエンド言語',
            picture:
              'https://ddb6ltykpq547.cloudfront.net/language/26/icon_for_web/b91f687669df25708bdd41dc1ebc0082',
          },
          {
            title: 'Java',
            desc: '大規模開発からモバイルアプリまで、汎用的なプログラミング言語',
            picture:
              'https://ddb6ltykpq547.cloudfront.net/language/7/icon_for_web/215b012918da862620380f1388e813a0',
          },
        ];
        this.courses = testData;
        this.querying = false;
        resolve(testData);
      }, 1000);
    });
  }
}
