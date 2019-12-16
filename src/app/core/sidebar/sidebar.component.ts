import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() isLoggedIn: boolean;
  @Input() userType: number;

  userId;

  constructor(private localStorageService: LocalStorageService) {
    debugger;
    let userinfo = localStorageService.getItem('UserInfo');
    if (userInfo)
      this.userId = JSON.parse(userinfo).Id;
  }

  ngOnInit() {
    this.localStorageService.onay7aga.subscribe(item => {
      this.userId = JSON.parse(this.localStorageService.getItem('UserInfo')).Id;
    });
  }

}
