import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FooterComponent } from './core/footer/footer.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component'
import { HomeComponent } from './home/home.component';
import { LocalStorageService } from './core/local-storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/auth.service';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { LogoutComponent } from './user/logout/logout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/auth.intercceptor';
import { InstuctorGuard } from './core/guards/instuctor.guard';
import { StudentGuard } from './core/guards/student.guard';
import { InstructorComponent } from './components/instructor/instructor.component';
import { SolvedExamsComponent } from './solved-exams/solved-exams.component';
import { UnSolvedExamsComponent } from './un-solved-exams/un-solved-exams.component';
import { SavedexamsComponent } from './savedexams/savedexams.component'
import { ExamservicesService } from './examservices.service';
import { LookupService } from './core/lookup.service';
import { AuthGuard } from './core/guards/auth.guard';
import { SolveExamComponent } from './solve-exam/solve-exam.component';
import { SolveExamService } from './solve-exam.service';
 

const routes = [
  { path: 'instructor/:id', component: InstructorComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user/sign-in', component: SignInComponent },
  { path: 'user/sign-up', component: SignUpComponent },
  { path: 'user/logout', component: LogoutComponent },
  { path: 'solved', component: SolvedExamsComponent , canActivate:[AuthGuard, StudentGuard]},
  { path: 'notsolved', component: UnSolvedExamsComponent, canActivate:[AuthGuard, StudentGuard] },
 { path: 'solveexam/:id', component: SolveExamComponent},
  { path: '**', redirectTo: 'home' }]


@NgModule({
  declarations: [
    AppComponent,
    SolveExamComponent,
    InstructorComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    LogoutComponent,    
    SolvedExamsComponent,
    UnSolvedExamsComponent,
    SavedexamsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FormsModule,
    ReactiveFormsModule,
    LocalStorageService,
    AuthService,
    StudentGuard,
    InstuctorGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ExamservicesService,
    LookupService,
    SolveExamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
