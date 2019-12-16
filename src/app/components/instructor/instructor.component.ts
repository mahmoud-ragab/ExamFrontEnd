import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  userInfo;
  constructor(private localStorageService: LocalStorageService) { 
    this.userInfo = JSON.parse(localStorageService.getItem('UserInfo'));
  }

  ngOnInit() {
  }

}
