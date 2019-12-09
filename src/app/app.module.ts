import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { InstructorComponent } from './components/instructor/instructor.component';

const routes = [
  {path:'instructor/:id',component:InstructorComponent},
  {path:'',component:AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InstructorComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
