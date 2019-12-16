import { Component, OnInit } from '@angular/core';
import { GenerateExamServiceService } from '../core/generate-exam-service.service';
import { LocalStorageService } from '../core/local-storage.service';

@Component({
  selector: 'app-generate-exam',
  templateUrl: './generate-exam.component.html',
  styleUrls: ['./generate-exam.component.css']
})
export class GenerateExamComponent implements OnInit {

  coursesOfInstructor: any = [];
  questionsReturned: any = [];
  numberOfMcq: number;
  numberOfTrueOrFalse: number;
  courseID: number;
  intructorID: Number;
  constructor(private api: GenerateExamServiceService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.intructorID = JSON.parse(this.localStorageService.getItem('UserInfo')).Id;

    this.api.getCoursesOfIntructor(this.intructorID).toPromise().then(res => {
      this.coursesOfInstructor = res;
    }).catch(err => {
      console.log(err);
    })
  }

  fitchCourse(courseID: any) {
    this.courseID = courseID;
  }
  submitData() {

    console.log("data ", {
      courseID: this.courseID,
      MCQ: this.numberOfMcq,
      trueOrFale: this.numberOfTrueOrFalse,
      InstructorID: this.intructorID
    })

    this.addExam({
      courseID: this.courseID,
      numberOfMCQ: this.numberOfMcq,
      numberOfTRUE_FALSE: this.numberOfTrueOrFalse,
      InstructorID: this.intructorID
    })
  }

  addExam(postdata: any) {
    this.api
      .addExam(postdata).toPromise().then(res => {
        console.log("qeustions", res);
        this.questionsReturned = res;
      }).catch(err => {
        console.log("error", err);
      })
  }
}
