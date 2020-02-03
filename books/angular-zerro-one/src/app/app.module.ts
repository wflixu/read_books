import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }  from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd/form';
import { StoreModule } from '@ngrx/store';
import { todoReducer,todoFilterReducer } from './pages/todo/todo.reducer';
// import { authReducer } from '../reducers/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './counter.reducer';

import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from './core/core.module';
import{ TodoModule} from './pages/todo/todo.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './pages/login/login.component';

import {AuthService} from './core/auth.service';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignPageComponent } from './pages/sign-page/sign-page.component';
import { UserService } from './core/user.service';
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
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    CoreModule,
    TodoModule,
    AppRoutingModule,
    NgZorroAntdModule,
    NzFormModule,
    StoreModule.forRoot({
      count: counterReducer,
      todos: todoReducer,
      todoFilter: todoFilterReducer,
     })
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
