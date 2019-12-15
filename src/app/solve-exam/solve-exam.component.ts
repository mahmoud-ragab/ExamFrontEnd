import { Component, OnInit } from '@angular/core';
import {SolveExamService}  from '../solve-exam.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'solve-exam',
  templateUrl: './solve-exam.component.html',
  styleUrls: ['./solve-exam.component.css']
})
export class SolveExamComponent implements OnInit {

url:string="https://localhost:44354/api/exam/";

  constructor(private myHttp :HttpClient)
  {
    
  }

  ngOnInit(){
      this.Getexam(20)
  }
  Exam;
  Questions;
  MultipleChoices 
  CorrectAnswers;
  StudentAnswers=[1,1,1,1,1,1,1,1,1,1];
  ChangeOption(i,f){
    this.StudentAnswers[i]=f;
    console.log(i,f);
  }
  Submit(){
    console.log(this.StudentAnswers);
    console.log(this.CorrectAnswers);
    

   

  }
  Getexam(id)
  {
    var destination_url=this.url+String(id)
    this.myHttp.get(destination_url).subscribe((Exam)=>{
      let Question = [];
      let MultipleChoice = [];
      let Correct=[]
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
              Question.push(content[prop])
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
              }}}}  }
        }
      this.Questions=Question;
      this.MultipleChoices=MultipleChoice;
      this.CorrectAnswers = Correct;
      }
    ,
    (error)=>{console.log(error)})
  }
              
    

}
