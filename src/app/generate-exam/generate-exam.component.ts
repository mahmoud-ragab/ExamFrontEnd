import { Component, OnInit } from '@angular/core';
import {GenerateExamServiceService} from '../core/generate-exam-service.service'; 
import { LocalStorageService } from '../core/local-storage.service';

@Component({
  selector: 'app-generate-exam',
  templateUrl: './generate-exam.component.html',
  styleUrls: ['./generate-exam.component.css']
})
export class GenerateExamComponent implements OnInit {

  questionsReturned  : any = []
  numberOfMcq : number;
  numberOfTrueOrFalse : number;
  courseID : number;
  constructor(private api: GenerateExamServiceService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.addExam({
      "courseID": "1",
      "numberOfMCQ":  "6",
      "numberOfTRUE_FALSE": "4",
      "InstructorID" :  "1"
    })
    let userInfo = JSON.parse(this.localStorageService.getItem('UserInfo'));
    let userId = userInfo.Id;
    console.log(userInfo);
  }

  fitchCourse(courseID : any){
    this.courseID = courseID;
  }
  submitData(){

    console.log("data " , {
      trueOrFale : this.numberOfTrueOrFalse,
      MCQ : this.numberOfMcq,
      courseID : this.courseID
    })

  }

  addExam(postdata : any){
    this.api
    .addExam(postdata).toPromise().then(res=>{
      console.log("qeustions",res);
      this.questionsReturned = res;
    }).catch(err=>{
      console.log("error" , err);
    })
  }
}
