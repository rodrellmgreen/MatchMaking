import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';

import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { ListsComponent } from './lists/lists/lists.component';
import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { TestErrorComponent } from 'src/errors/test-error/test-error.component';
import { ServerErrorComponent } from 'src/errors/server-error/server-error.component';
import { NotFoundComponent } from 'src/errors/not-found/not-found.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import {NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './interceptors/loading.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      MemberEditComponent,
      MessagesComponent,
      ListsComponent,
      TestErrorComponent,
      ServerErrorComponent,
      NotFoundComponent,
      MemberCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({
      type: 'ball-scale-multiple'
    }),
    MaterialModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
