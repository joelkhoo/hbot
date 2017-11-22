import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ApiAiClient } from 'api-ai-javascript';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string,  public quickReplies: String[] = []) {}
}

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });
  conversation = new BehaviorSubject<Message[]>([]);
  constructor() {}
  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    return this.client.textRequest(msg)
               .then(res => {
                  //const speech = res.result.fulfillment.speech;
                  const messages = res.result.fulfillment.messages;
                  //console.log("counted messages "+res.result.fulfillment.messages.length);

                  //Extracts each individual response message
                  
                  for(let h in messages){
                    if(messages[h].type == "0"){
                      const botMessage = new Message(messages[h].speech, 'bot');
                      this.update(botMessage);
                    } else if (messages[h].type == "4"){
                      let markUps = [];
                      //console.log("WOOT: "+JSON.stringify(messages[h].payload.telegram));
                      const replyMarkUp = messages[h].payload.telegram.reply_markup.inline_keyboard;
                      for(let markup in replyMarkUp){
                        //console.log("mmmm "+JSON.stringify(replyMarkUp[markup][0].text));
                        markUps.push(JSON.stringify(replyMarkUp[markup][0].text));
                      }
                      //console.log("markup length of "+markUps.length);
                      const botMessage = new Message(messages[h].payload.telegram.text, 'bot',markUps);
                      this.update(botMessage);
                    }

                  }

                  //const botMessage = new Message(speech, 'bot');
                  //this.update(botMessage);
               });
  }
  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }

}
