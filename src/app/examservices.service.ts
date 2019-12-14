import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import { exams } from './exams';
import { Http, ResponseType,   } from '@angular/http';
 
 

@Injectable({
  providedIn: 'root'
})
export class ExamservicesService {

  constructor(private http:Http,private h:HttpClient) { }

ApiUrlSolved:string = "https://localhost:44354/api/solvedExams/";
ApiUrlNotSolved:string = "https://localhost:44354/api/NotSolvedExams/";
ApiUrlSolvedCount:string = "https://localhost:44354/api/countsolvedExams/";
ApiUrlNotSolvedCount:string = "https://localhost:44354/api/countnotsolvedExams/";
ApiUrlDownloadReport:string = "https://localhost:44354/api/Report/";

 


//ex:exams[];

 
id:number;
search:string;

GetSolvedExams(id)
{
   /*this.http.get(this.ApiUrl).toPromise().then(
    res=>{this.ex = res as exams[];}
  );*/
  return this.http.get(this.ApiUrlSolved +id);
}

GetNotSolvedExams(id)
{
   
  return this.http.get(this.ApiUrlNotSolved +id);
}



GetCountSolvedExams(id)
{
   
  return this.http.get(this.ApiUrlSolvedCount +id);
}


GetCountNotSolvedExams(id)
{
   
  return this.http.get(this.ApiUrlNotSolvedCount +id);
}


 downloadReport(ExamID,StudentID)
 {
return this.h.get(this.ApiUrlDownloadReport +ExamID +'/'+StudentID,({responseType:'blob'}) );
 }

 

}
