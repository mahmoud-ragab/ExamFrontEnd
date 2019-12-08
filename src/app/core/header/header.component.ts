import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isLoggedIn: boolean;
  // userName: string;

  constructor(private localStorageService: LocalStorageService) {
    // var uI = JSON.parse(this.localStorageService.getItem('UserInfo'));
    // if (uI)
    //   this.userName = uI.UserName;
  }

  ngOnInit() {
  }

}
