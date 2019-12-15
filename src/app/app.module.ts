import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SolveExamComponent } from './solve-exam/solve-exam.component'
import { SolveExamService } from './solve-exam.service';
import { FormsModule }   from '@angular/forms';
const routes = [
  {path:'',component:AppComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SolveExamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

    ])
  ],
  providers: [
    SolveExamService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
