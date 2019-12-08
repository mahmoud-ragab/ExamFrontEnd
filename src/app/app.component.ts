import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';
import { LocalStorageService } from './core/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Examination';
  isLoggedIn: boolean;
  userType: number;

  constructor(private authServie: AuthService,
    private localStorageService: LocalStorageService) {
      this.isLoggedIn = this.authServie.isLoggedIn();
      this.userType = this.authServie.getUserType();
  }
  ngOnInit() {
    this.localStorageService.onItemChanged.subscribe(item => {
      debugger;
      this.isLoggedIn = this.authServie.isLoggedIn();
      this.userType = this.authServie.getUserType();
    });
  }

}
