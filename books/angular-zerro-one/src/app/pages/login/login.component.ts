import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }
  onClick():void{
    //  console.log(`${username}--- ${password}`);
    console.log(`auth result is:`+this.service.loginWithCredentials(this.username,this.password));
  }

  onSubmit(formValue){
    console.log(formValue);
    console.log(`auth result is:`+this.service.loginWithCredentials(formValue.username,formValue.password));

  }

}
