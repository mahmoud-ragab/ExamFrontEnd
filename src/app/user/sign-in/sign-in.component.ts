import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isSubmitted: boolean;
  loginModel = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router) {
    if (this.authService.isLoggedIn())
      router.navigate(['/home']);
  }

  ngOnInit() {
  }

  get email() {
    return this.loginModel.get('email');
  }
  get password() {
    return this.loginModel.get('password');
  }

  submit() {
    let credentials = {
      Email: this.email.value,
      Password: this.password.value
    }
    this.authService.login(credentials)
      .subscribe((response) => {
        if (response) {
          this.localStorageService.setItem('UserInfo', JSON.stringify({
            Id: response['Id'],
            UserName: response['UserName'],
            Email: response['Email'],
            Type: response['Type'],
            DepartmentId: response['DepartmentId']
          }));
          this.localStorageService.setToken(response['Token']);
          if (response['Type'] == 1)
            this.router.navigate(['/solved']);
          else if (response['Type'] == 2)
            this.router.navigate([`instructor/${response['Id']}`])
        } else {
          this.loginModel.setErrors({
            invalidCred: true
          })
        }
      })

    this.isSubmitted = true;
  }

}
