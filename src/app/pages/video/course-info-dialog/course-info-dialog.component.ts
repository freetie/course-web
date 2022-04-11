import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../../../entity/course';

@Component({
  selector: 'app-course-info-dialog',
  templateUrl: './course-info-dialog.component.html',
  styleUrls: ['./course-info-dialog.component.css']
})
export class CourseInfoDialogComponent implements OnInit {
  courseForm = this.formBuilder.group({
    title: '',
    desc: '',
    picture: '',
    price: 0,
  });

  constructor(
    public dialogRef: MatDialogRef<CourseInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course | undefined,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.courseForm.setValue({
        title: this.data.title,
        desc: this.data.desc,
        price: this.data.price,
        picture: this.data.picture,
      })
    }
  }
}
