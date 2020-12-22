import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
// import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { StoreModule } from '@ngrx/store';
// import { authReducer } from '../reducers/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { TodoModule } from './pages/todo/todo.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { todoReducer, todoFilterReducer } from './pages/todo/todo.reducer';
import { counterReducer } from './counter.reducer';
import { AuthService } from './core/auth.service';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignPageComponent } from './pages/sign-page/sign-page.component';
import { UserService } from './core/user.service';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { authReducer } from './core/auth.reducer';
import { AuthGuardService } from './core/auth-guard.service';
import { X_LC_ID, X_LC_KEY } from './core/net';

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
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    // MatInputModule,
    // MatFormFieldModule,
    // MatButtonModule,
    CoreModule,
    TodoModule,
    AppRoutingModule,
    // NgZorroAntdModule,
    StoreModule.forRoot({
      count: counterReducer,
      todos: todoReducer,
      auth: authReducer,
      todoFilter: todoFilterReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    {
      provide: 'auth',
      useClass: AuthService,
    },
    UserService,
    AuthGuardService,
    { provide: X_LC_ID, useValue: 'edawgkVY8XvUY5oWtvmzRH6ylj-gzGzoHsz' },
    { provide: X_LC_KEY, useValue: 'erGJnJ1a8KVnaVLquMKj6uSllD' },
    {
      provide: 'urls',
      useValue: {
        login: 'https://awgkvy8x.lc-cn-n1-shared.com/1.1/login',
        sign: 'https://awgkvy8x.lc-cn-n1-shared.com/1.1/users',
        classes: 'https://awgkvy8x.lc-cn-n1-shared.com/1.1/classes/',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
