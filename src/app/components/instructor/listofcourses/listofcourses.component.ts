import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api/api.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-listofcourses',
  templateUrl: './listofcourses.component.html',
  styleUrls: ['./listofcourses.component.css']
})
export class ListofcoursesComponent implements OnInit {

  courses: any = []
  constructor(private api: ApiService,private router: Router) { }

  ngOnInit() {
    this.getCourses()
  }
  getCourses() {
    this.api.getInstructorCourseList()
      .subscribe(data => {
        console.log('recive data :: ' + data)
        //debugger;
        for (const iterator of (data as any)) {
          this.courses.push({
            id: iterator.Id,
            name: iterator.Name
          })
        }
      }
      );
  }
  getCourseExams(id){
    //debugger;
    this.router.navigate([`instructor/1/${id}/exams`])
    ///instructor/1/course/(cid)/exams
    //instructor/1?courseId=1
  }
}
