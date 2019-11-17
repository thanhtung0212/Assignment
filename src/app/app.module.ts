import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgZorroAntdModule, NZ_I18N, vi_VN } from 'ng-zorro-antd'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { registerLocaleData } from '@angular/common'
import vi from '@angular/common/locales/vi';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ExamComponent } from './exam/exam.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NgxPaginationModule } from 'ngx-pagination'


import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { UserResolver } from './user/user.resolver';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { UpdateComponent } from './update/update.component';



registerLocaleData(vi)


@NgModule({
  declarations: [AppComponent, IndexComponent, LoginComponent, SigninComponent, ChangepasswordComponent, FeedbackComponent, ContactComponent, IntroduceComponent, ExamComponent,
    UserComponent,
    NavigationComponent,
    FooterComponent,
    ResetpwComponent,
    UpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      // { path: 'feedback', component: FeedbackComponent },
      // { path: 'intro', component: IntroduceComponent },
      // { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'index', component: IndexComponent, resolve: { data: UserResolver } },
      { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'signin', component: SigninComponent },
      { path: 'changepassword', component: ChangepasswordComponent },
      // { path: 'changepassword', component: ChangepasswordComponent, resolve: { data: UserResolver } },

      { path: 'index/:subjectId', component: ExamComponent, resolve: { data: UserResolver } },

      { path: 'user', component: UserComponent, resolve: { data: UserResolver } },
      { path: 'update', component: UpdateComponent, resolve: { data: UserResolver } },
      // { path: 'resetpassword', component: ResetpwComponent },


      // { path: '', component: IndexComponent },

    ], { enableTracing: true }),
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard, { provide: NZ_I18N, useValue: vi_VN, }],

  bootstrap: [AppComponent]
})
export class AppModule { }
