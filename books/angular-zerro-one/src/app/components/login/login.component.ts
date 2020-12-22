import { Component, OnInit, Inject, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Auth } from 'src/app/core/entities';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  constructor(@Inject('auth') private service, private router: Router, private fb: FormBuilder) { }

  getErrorMessage() {
    return '';
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    console.log(this.validateForm);
    const { userName, password } = this.validateForm.value;

    this.service.loginWithCredentials(userName, password)
      .subscribe((auth: Auth) => {
        if (!auth.hasError) {

          this.router.navigate(['todos/ALL']);

        } else {
          this.router.navigate(['./login']);
        }
      })

  }


}
