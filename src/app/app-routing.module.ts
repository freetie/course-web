import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { CourseComponent } from './pages/course/course.component';
import { StudentComponent } from './pages/student/student.component';
import { VideoComponent } from './pages/video/video.component';
import { CourseDetailComponent } from './pages/course/course-detail/course-detail.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'course/:id',
    component: CourseDetailComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'video',
    component: VideoComponent,
  },
  { path: '', redirectTo: '/course', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
