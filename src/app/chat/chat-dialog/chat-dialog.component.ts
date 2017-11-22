import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../../chat.service';
import { Observable } from 'rxjs/Observable';
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

  constructor(public chat: ChatService) { }

  ngOnInit() {
    this.startMessage = "Say \'hi\' to begin";
    this.messages = this.chat.conversation.asObservable().scan((acc,val)=> acc.concat(val));
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
