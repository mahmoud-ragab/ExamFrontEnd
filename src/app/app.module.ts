import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './user/logout/logout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/auth.intercceptor';
import { InstuctorGuard } from './core/guards/instuctor.guard';
import { StudentGuard } from './core/guards/student.guard';
import { InstructorComponent } from './components/instructor/instructor.component';
import { ListofcoursesComponent } from './components/instructor/listofcourses/listofcourses.component';
import { ListofexamsComponent } from './components/instructor/listofexams/listofexams.component';
import { StudentmodelanswerComponent } from './components/instructor/studentmodelanswer/studentmodelanswer.component';

const routes = [
  { path: 'instructor/:id/:c_id/:s_id/:e_id/modelanswer', component: StudentmodelanswerComponent },
  { path: 'instructor/:id/:c_id/exams', component: ListofexamsComponent },
  { path: 'instructor/:id/courses', component: ListofcoursesComponent },
  { path: 'instructor/:id', component: InstructorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user/sign-in', component: SignInComponent },
  { path: 'user/sign-up', component: SignUpComponent },
  { path: 'user/logout', component: LogoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }]

@NgModule({
  declarations: [
    AppComponent,
    InstructorComponent,
    ListofexamsComponent,
    StudentmodelanswerComponent,
    ListofcoursesComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
