import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api/api.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-listofcourses',
  templateUrl: './listofcourses.component.html',
  styleUrls: ['./listofcourses.component.css']
})
export class ListofcoursesComponent implements OnInit {

  courses: any = []
  pr;
  constructor(private api: ApiService, private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((p) => {
      this.pr = p
    })
  }

  ngOnInit() {
    this.getCourses()
  }
  getCourses() {
    this.api.getInstructorCourseList(this.pr.id)
      .subscribe(data => {
        console.log(data)
        this.courses = data;
      });
  }
  getCourseExams(cid) {
    debugger;
    this.router.navigate([`instructor/${this.pr.id}/course/${cid}/exams`])
  
  }
}
