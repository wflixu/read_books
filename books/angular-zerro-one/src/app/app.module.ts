import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from './core/core.module';
import{ TodoModule} from './pages/todo/todo.module';
import {PlaygroundModule} from './pages/playground/playground.module'
import { AppComponent } from './app.component';
import {LoginComponent} from './pages/login/login.component';

import {AuthService} from './core/auth.service';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignPageComponent } from './pages/sign-page/sign-page.component';
import { UserService } from './core/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    SignPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    TodoModule,
    PlaygroundModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: '',
    useClass: AuthService
  },
  UserService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
