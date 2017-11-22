import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../../chat.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../login/auth.service';
import 'rxjs/add/operator/scan';


@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;
  quickValue: string;
  startMessage: string;

  userLoggedIn: boolean;

  constructor(public chat: ChatService, public auth: AuthService) { }

  ngOnInit() {
    //this.startMessage = "Say \'hi\' to begin";
    this.messages = this.chat.conversation.asObservable().scan((acc,val)=> acc.concat(val));
    this.auth.user.subscribe(user=> (user)? this.enableMessaging():this.disableMessage());
  }

  enableMessaging(){
    this.startMessage = "Say \'hi\' to begin";
    this.userLoggedIn = true;
  }

  disableMessage(){
    this.startMessage = "Sign in to get started";
    this.userLoggedIn = false;
    //this.chat.clear();
  }

  sendMessage(){
    this.chat.converse(this.formValue);
    this.formValue = '';
    this.startMessage = 'Your Message';
  }

  quickReply(quickValue){
    console.log("Sending out "+quickValue);
    this.chat.converse(quickValue);
  }

}
