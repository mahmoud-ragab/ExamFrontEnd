import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { AuthService } from '../../core/auth.service'
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isSubmitted: boolean;
  registerModel = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    // confirmPassword: new FormControl(),
    type: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router) {
    this.isSubmitted = false;
    if (this.authService.isLoggedIn())
      router.navigate(['/home']);
  }

  ngOnInit() {
  }

  get username() {
    return this.registerModel.get('username');
  }
  get email() {
    return this.registerModel.get('email');
  }
  get password() {
    return this.registerModel.get('password');
  }
  // get confirmPassword() {
  //   return this.registerModel.get('confirmPassword');
  // }
  get type() {
    return this.registerModel.get('type');
  }

  submit(): void {
    if (this.registerModel.valid) {
      let requestModel = {
        UserName: this.username.value,
        Email: this.email.value,
        Password: this.password.value,
        Type: this.type.value
      }
      this.authService.register(requestModel)
        .subscribe((response) => {
          this.localStorageService.setItem('UserInfo', JSON.stringify({
            Id: response['Id'],
            UserName: response['UserName'],
            Email: response['Email'],
            Type: response['Type']
          }));
          this.localStorageService.setToken(response['Token']);
          this.router.navigate(['/home']);
        })
    }
    this.isSubmitted = true;
  }

}
