import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuardService} from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import {UserService} from './services/UserService';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

// @ts-ignore
const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponent},
  { path: 'edit', canActivate: [AuthGuardService], component: EditAppareilComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent},
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found'}
];
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuardService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
