import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseService } from 'src/app/service/course.service';
import { Course } from '../../../entity/course';

@Component({
  selector: 'app-course-info-dialog',
  templateUrl: './course-info-dialog.component.html',
  styleUrls: ['./course-info-dialog.component.css'],
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
    private snackBar: MatSnackBar,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.courseForm.setValue({
        title: this.data.title,
        desc: this.data.desc,
        price: this.data.price,
        picture: this.data.picture,
      });
    }
  }

  onSubmit() {
    const request = this.data
      ? this.courseService.updateCourse(this.data.id, this.courseForm.value)
      : this.courseService.createCourse(this.courseForm.value);
    request.then(() => {
      this.snackBar.open(this.data ? '変更成功' : '作成成功', undefined, {
        duration: 1500,
      });
      this.dialogRef.close(true);
    });
  }
}
