import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api/api.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listofexams',
  templateUrl: './listofexams.component.html',
  styleUrls: ['./listofexams.component.css']
})
export class ListofexamsComponent implements OnInit {
  exams: any = []
  constructor(private api: ApiService,
    private route: ActivatedRoute) {
      route.params.subscribe((p) => {
console.log(p)
      })
    }
  ngOnInit() {
    this.getExams()
  }
  getExams(){
    this.api.getInstructorCourseExamList(1,2)
    .subscribe(data=>{
      console.log('recive data :: ' + data)
        //debugger;
        for (const iterator of (data as any)) {
          this.exams.push({
            id: iterator.Id,
          })
        }
    });
  }
}
