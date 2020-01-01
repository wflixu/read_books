import { Component, OnInit, Inject, ɵConsole } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(@Inject('auth') private service,
  private router:Router) { }

  ngOnInit() {
  }
  onClick():void{
    //  console.log(`${username}--- ${password}`);
    console.log(`auth result is:`+this.service.loginWithCredentials(this.username,this.password));
  }

  onSubmit(formValue){
    console.log(formValue);
    console.log(`auth result is:`+this.service.loginWithCredentials(formValue.username,formValue.password));
    this.service.loginWithCredentials(formValue.username,formValue.password)
    .then(isLogin=>{
       if(isLogin){
         this.router.navigate(['todo']);
       }else{
        this.router.navigate(['./login']);
       }
    })
  }

}
