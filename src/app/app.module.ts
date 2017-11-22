import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Custom ZipDoc modules
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { LoginModule } from './login/login.module';
//Firebase Modules
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AuthService } from './login/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    LoginModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
