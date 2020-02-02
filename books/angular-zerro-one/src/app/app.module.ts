import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule,MatFormFieldModule,MatInputModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from './core/core.module';
import{ TodoModule} from './pages/todo/todo.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './pages/login/login.component';

import {AuthService} from './core/auth.service';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignPageComponent } from './pages/sign-page/sign-page.component';
import { UserService } from './core/user.service';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    SignPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    CoreModule,
    TodoModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  providers: [{
    provide: '',
    useClass: AuthService
  },
  UserService,
  { provide: NZ_I18N, useValue: zh_CN },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
