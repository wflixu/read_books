import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import {LoginComponent} from './pages/login/login.component';

import {AuthService} from './core/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{
    provide: 'auth',
    useClass: AuthService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
