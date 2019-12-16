import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api/api.service'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-listofexams',
  templateUrl: './listofexams.component.html',
  styleUrls: ['./listofexams.component.css']
})
export class ListofexamsComponent implements OnInit {
  exams: any = {}
  par: any = {}
  constructor(private api: ApiService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe((p) => {
      this.par = p
    })
  }
  ngOnInit() {
    this.getExams()
  }
  getExams() {
    this.api.getInstructorCourseExamList(this.par.id, this.par.c_id)
      .subscribe(data => {
        debugger;
        this.exams = data
      });
  }
  viewStudentModelAnswer(e_id,s_id){
    this.router.navigate([`instructor/${this.par.id}/course/${this.par.c_id}/exam/${e_id}/student/${s_id}/modelanswer`])
  }
}
