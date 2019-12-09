import { Component, OnInit } from '@angular/core';
import { ExamservicesService } from '../examservices.service';
import { exams } from '../exams';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-un-solved-exams',
  templateUrl: './un-solved-exams.component.html',
  styleUrls: ['./un-solved-exams.component.css']
})
export class UnSolvedExamsComponent implements OnInit {

  constructor(public serv:ExamservicesService,private r:Router) { }
 
  ngOnInit() {
this.solvedExams();
this.CountsolvedExams();
this.CountNotsolvedExams();
     
  }
arr:exams[] =[];
countSolved:number;
countNotSolved:number;

  solvedExams()
  {
    this.serv.GetNotSolvedExams(1).subscribe(
      
        data=>{this.arr = data.json()}
    )

  };

  CountsolvedExams()
  {
    this.serv.GetCountSolvedExams(1).subscribe(
      
        data=>{this.countSolved = data.json()}
    )
    }


    CountNotsolvedExams()
    {
      this.serv.GetCountSolvedExams(1).subscribe(
        
          data=>{this.countNotSolved = data.json()}
      )
      }

      GOToExam( id:number){
        this.r.navigate(['/SolveExam/'+id])
            }
  
}
