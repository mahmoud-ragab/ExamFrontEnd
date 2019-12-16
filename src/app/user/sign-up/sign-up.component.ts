import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { AuthService } from '../../core/auth.service'
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { LookupService } from 'src/app/core/lookup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  departmentLookup: any;

  isSubmitted: boolean;
  registerModel = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    // confirmPassword: new FormControl(),
    type: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private lookupService: LookupService) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    if (this.authService.isLoggedIn())
      this.router.navigate(['/home']);

    this.lookupService.getDepartments()
      .subscribe((response) => {
        this.departmentLookup = response;
      });
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
  get department() {
    return this.registerModel.get('department');
  }

  submit(): void {
    if (this.registerModel.valid) {
      let requestModel = {
        UserName: this.username.value,
        Email: this.email.value,
        Password: this.password.value,
        Type: this.type.value,
        DepartmentId: this.department.value
      }
      this.authService.register(requestModel)
        .subscribe((response) => {
          debugger;
          this.localStorageService.setItem('UserInfo', JSON.stringify({
            Id: response['Id'],
            UserName: response['UserName'],
            Email: response['Email'],
            Type: response['Type'],
            DepartmentId: this.department.value
          }));
          this.localStorageService.setToken(response['Token']);
          if (response['Type'] == 1)
            this.router.navigate(['/solved']);
          else if (response['Type'] == 2)
            this.router.navigate(['/instructor', response['Id']])
        })
    }
    this.isSubmitted = true;
  }

}
