import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../../course';

@Component({
  selector: 'app-buy-course-dialog',
  templateUrl: './buy-course-dialog.component.html',
  styleUrls: ['./buy-course-dialog.component.css']
})
export class BuyCourseDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BuyCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course,
  ) { }

  ngOnInit(): void {
  }

}
