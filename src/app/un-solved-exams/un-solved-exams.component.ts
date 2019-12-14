import { Component, OnInit } from '@angular/core';
import { ExamservicesService } from '../examservices.service';
import { exams } from '../exams';
import { Router } from '@angular/router';
import { LocalStorageService } from '../core/local-storage.service';
 

@Component({
  selector: 'app-un-solved-exams',
  templateUrl: './un-solved-exams.component.html',
  styleUrls: ['./un-solved-exams.component.css']
})
export class UnSolvedExamsComponent implements OnInit {

  constructor(public serv:ExamservicesService,private r:Router,public localService:LocalStorageService) { }
 
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
    this.serv.GetNotSolvedExams(JSON.parse(this.localService.getItem('UserInfo'))['Id']).subscribe(
      
        data=>{this.arr = data.json()}
    )

  };

  CountsolvedExams()
  {
    this.serv.GetCountSolvedExams(JSON.parse(this.localService.getItem('UserInfo'))['Id']).subscribe(
      
        data=>{this.countSolved = data.json()}
    )
    }


    CountNotsolvedExams()
    {
      this.serv.GetCountNotSolvedExams(JSON.parse(this.localService.getItem('UserInfo'))['Id']).subscribe(
        
          data=>{this.countNotSolved = data.json()}
      )
      }




      Course:string;


      search() {
       if (this.Course.trim())
        {
    
          this.arr =  this.arr.filter(
            res=>{ return  res.Course.toLowerCase().match(this.Course.toLowerCase()); } );
        }

        else  
        this.solvedExams();
        }



      GOToExam( id:number){
        this.r.navigate(['/SolveExam/'+id])
            }
  
}
