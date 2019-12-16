import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api/api.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-studentmodelanswer',
  templateUrl: './studentmodelanswer.component.html',
  styleUrls: ['./studentmodelanswer.component.css']
})
export class StudentmodelanswerComponent implements OnInit {
  modelanswer;
  parameter;
  constructor(private api: ApiService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params.subscribe((p) => {
      this.parameter = p
    })
  }

  ngOnInit() {
    this.getModelAnswer()
  }
  getModelAnswer() {
    this.api.getInstructorCourseExamAnswerSheetList(
      this.parameter.id,this.parameter.cid,
      this.parameter.e_id, this.parameter.s_id)
      .subscribe(data => {
        this.modelanswer = data;
      })
  }

}
