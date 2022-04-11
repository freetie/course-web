import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { httpInterceptorProviders } from './http-interceptors';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CourseComponent } from './pages/course/course.component';
import { StudentComponent } from './pages/student/student.component';
import { VideoComponent } from './pages/video/video.component';
import { CourseDetailComponent } from './pages/course/course-detail/course-detail.component';
import { BuyCourseDialogComponent } from './pages/course/buy-course-dialog/buy-course-dialog.component';
import { CourseInfoDialogComponent } from './pages/video/course-info-dialog/course-info-dialog.component';
import { VideoUploadDialogComponent } from './pages/video/video-upload-dialog/video-upload-dialog.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SignupComponent,
    CourseComponent,
    StudentComponent,
    VideoComponent,
    CourseDetailComponent,
    BuyCourseDialogComponent,
    CourseInfoDialogComponent,
    VideoUploadDialogComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDialogModule,
    MatListModule,
    MatToolbarModule,
    MatSnackBarModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
