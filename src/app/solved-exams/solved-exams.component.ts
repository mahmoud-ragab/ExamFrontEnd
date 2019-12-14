import { Component, OnInit } from '@angular/core';
import { ExamservicesService } from '../examservices.service';
import { exams } from '../exams';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../core/local-storage.service';

@Component({
  selector: 'app-solved-exams',
  templateUrl: './solved-exams.component.html',
  styleUrls: ['./solved-exams.component.css']
 

})
export class SolvedExamsComponent implements OnInit {

  constructor( private Serv:ExamservicesService,public act:ActivatedRoute, private localService:LocalStorageService) { 
   
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
    //debugger
    this.Serv.GetSolvedExams(JSON.parse(this.localService.getItem('UserInfo'))['Id']).subscribe(
        data=>{this.solvedArr = data.json()}
    )

  };

  CountsolvedExams()
  {
    this.Serv.GetCountSolvedExams(JSON.parse(this.localService.getItem('UserInfo'))['Id']).subscribe(
      
        data=>{this.countSolved = data.json()}
    )
    }
    CountNotsolvedExams()
    {
      this.Serv.GetCountNotSolvedExams(JSON.parse(this.localService.getItem('UserInfo'))['Id']).subscribe(
        
          data=>{this.countNotSolved = data.json()}
      )
      }

      Course:string;


      search() {
       if (this.Course.trim())
        {
    
          this.solvedArr =  this.solvedArr.filter(
            res=>{ return  res.Course.toLowerCase().match(this.Course.toLowerCase()); } );
        }

        else  
        this.solvedExams();
        }

 

        dwonload(ExamID)
        {
          
         this.Serv.downloadReport(ExamID,JSON.parse(this.localService.getItem('UserInfo'))['Id']).subscribe(x=>
          {
            var fileType ="application/pdf";
            var fileName = "report.pdf";
            var newBlob= new Blob([x],{type:fileType})


            if(window.navigator && window.navigator.msSaveOrOpenBlob)
            {
               window.navigator.msSaveOrOpenBlob(newBlob);
               return;
            }


            const data = window.URL.createObjectURL(newBlob);

            var link = document.createElement('a');
           //link.href =data; // use it inteatd of window.open to downlod it in pc 
           window.open(data,'_blank');
          
           link.download=  fileName;
          

            

            link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view: window}));

         setTimeout(function(){
         window.URL.revokeObjectURL(data);
          link.remove();
           },100);


          });
          
        

           
        }
       
     

}
