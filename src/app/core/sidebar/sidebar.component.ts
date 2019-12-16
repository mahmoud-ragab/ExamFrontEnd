import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

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
    this.userId = JSON.parse(localStorageService.getItem('UserInfo')).Id;
   }

  ngOnInit() {
  }

}
