import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SolvedExamsComponent } from './solved-exams/solved-exams.component';
import { UnSolvedExamsComponent } from './un-solved-exams/un-solved-exams.component';
import { SavedexamsComponent } from './savedexams/savedexams.component'
import { ExamservicesService } from './examservices.service';
import { HttpModule } from '@angular/http';
 

const routes = [
  {path:'',component:SolvedExamsComponent},
  {path:'solved',component:SolvedExamsComponent},
  {path:'notsolved',component:UnSolvedExamsComponent},
   {path:'SolveExam/:id',component:SolvedExamsComponent}
  //{path:'savedexams',component:SavedexamsComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    SolvedExamsComponent,
    UnSolvedExamsComponent,
    SavedexamsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
  
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [ExamservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
