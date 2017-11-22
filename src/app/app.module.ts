import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Custom ZipDoc modules
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
//Firebase Modules
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
