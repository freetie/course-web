import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  { path: '', redirectTo: '/course', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
