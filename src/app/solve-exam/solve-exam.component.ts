import { Component, OnInit } from '@angular/core';
import {SolveExamService}  from '../solve-exam.service';
import {HttpClient} from '@angular/common/http';
import { LocalStorageService } from '../core/local-storage.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'solve-exam',
  templateUrl: './solve-exam.component.html',
  styleUrls: ['./solve-exam.component.css']
})
export class SolveExamComponent implements OnInit {

Getexamurl:string="https://localhost:44354/api/exam/";
Postexamurl:string="https://localhost:44354/api/PostExam/";
user: any;

  constructor(private myHttp :HttpClient,
    private localStorageService: LocalStorageService,private route: ActivatedRoute)
  {
    this.user = JSON.parse(localStorageService.getItem('UserInfo'));
    console.log(this.user)
  
  }

  ngOnInit(){
      this.Getexam(this.route.snapshot.paramMap.get('id'))
  }
  Exam;
  Questions;
  Questions_id;
  MultipleChoices;
  NumofQuestions;
  CorrectAnswers;
  StudentAnswers=[1,1,1,1,1,1,1,1,1,1];
  ChangeOption(i,f){
    this.StudentAnswers[i]=f;
    console.log(i,f);
  }
  Submit(){
    
    let exam_id=this.route.snapshot.paramMap.get('id');
    let Std_id= this.user['Id'];
    let CorrectAnswer=[]
    let StdAnswers=[]
    for (let i=0;i<this.NumofQuestions;i++)
    {
      StdAnswers.push(this.StudentAnswers[i])
      CorrectAnswer.push(this.CorrectAnswers[i]);
    }
    this.PostExam(exam_id,Std_id,this.Questions_id,StdAnswers,CorrectAnswer)


  }
 
  Getexam(id)
  {
    var destination_url=this.Getexamurl+String(id)
    this.myHttp.get(destination_url).subscribe((Exam)=>{
      let Question = [];
      let Question_id=[];
      let MultipleChoice = [];
      let Correct=[]
      let NumofQ=0;
      for (let prop in Exam)
      {

        if(prop=='Question')
        {
          for(let content of Exam[prop])
          {
            for (let prop in content)
            {
              if(prop=='Content')
              {
                NumofQ+=1;
              Question.push(content[prop])
              }
              if(prop=='Id')
              {
                Question_id.push(content[prop])
              }
              if(prop=='CorrectAnswer')
              {
                Correct.push(content[prop]) 
              }
              if(prop=='Answers')
              {
             //console.log(content['Answers']) /* has 4 options*/
              for(let option in content[prop])
              { 
              MultipleChoice.push(content[prop][option]['Content'])
              }}
              
            }}

              }
        }
      this.Questions=Question;
      this.MultipleChoices=MultipleChoice;
      this.CorrectAnswers = Correct;
      this.Questions_id=Question_id;
      this.NumofQuestions=NumofQ;
    
      }
    ,

    (error)=>{console.log(error)})
    
  }
  PostExam(Exam_id,Student_id,Questions_id,Answers_id,CorrectAnswer)
  {
    let ExamDetailes={
      Exam_id,
      Student_id,
      Questions_id,
      Answers_id,
      CorrectAnswer
    }
    this.myHttp.post(this.Postexamurl,{body:ExamDetailes}).subscribe((data)=>{
      console.log(data)
    },(error)=>{console.log(error)})

  }
              
    

}
