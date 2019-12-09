import { Component, OnInit } from '@angular/core';
import { ExamservicesService } from '../examservices.service';
import { exams } from '../exams';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solved-exams',
  templateUrl: './solved-exams.component.html',
  styleUrls: ['./solved-exams.component.css']
 

})
export class SolvedExamsComponent implements OnInit {

  constructor( private Serv:ExamservicesService,public act:ActivatedRoute) { 
   
  }
  solvedArr :exams [] = [];
  countSolved:number;
  countNotSolved:number;
    // id:number;
   
  ngOnInit() {

/*this.act.params.subscribe(
  d=>{this.id = d['id']}
);*/

   this.solvedExams();
   this.CountsolvedExams();
   this.CountNotsolvedExams();
   
  }
  

 

  solvedExams()
  {
    this.Serv.GetSolvedExams(1).subscribe(
      
        data=>{this.solvedArr = data.json()}
    )

  };

  CountsolvedExams()
  {
    this.Serv.GetCountSolvedExams(1).subscribe(
      
        data=>{this.countSolved = data.json()}
    )
    }
    CountNotsolvedExams()
    {
      this.Serv.GetCountSolvedExams(1).subscribe(
        
          data=>{this.countNotSolved = data.json()}
      )
      }

}
