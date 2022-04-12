import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { PaginatedData } from 'src/app/entity';
import { AccountService } from '../../service/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  searchForm = this.formBuilder.group({
    username: '',
  });
  displayedColumns = ['id', 'username', 'createdAt', 'action'];
  studentsData: PaginatedData<Student> = {
    count: 0,
    page: 1,
    size: 5,
    items: [],
  };
  querying = false;
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.queryStudents();
  }

  queryStudents(page?: number, size?: number, username?: string) {
    this.accountService
      .queryStudents(page ?? 1, size ?? 5, username)
      .subscribe((data) => {
        this.studentsData = data;
      });
  }

  onPage(event: PageEvent) {
    this.queryStudents(event.pageIndex + 1, event.pageSize);
  }

  onSearch() {
    this.queryStudents(
      1,
      this.studentsData.size,
      this.searchForm.value.username
    );
  }

  onDelete(student: Student) {
    if (confirm('このアカウントを削除しますか')) {
      this.accountService.deleteAccount(student.id).subscribe(() => {
        this.snackBar.open('削除成功', undefined, {
          duration: 1500,
        });
        this.queryStudents(
          this.studentsData.page,
          this.studentsData.size,
          this.searchForm.value.username
        );
      });
    }
  }
}
