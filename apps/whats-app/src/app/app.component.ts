import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@whatsapp/api-interfaces';

@Component({
  selector: 'wa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');

  dark = true;
  chatIsOpen = false;
  chatSymbolsAreOpen = false;
  chatSymboOpen = 0;

  constructor(private http: HttpClient) {}

  public CloseChat() {
    this.chatIsOpen = false;
  }

  public OpenChat() {
    this.chatIsOpen = true;
  }

  public OpenChatSymbols() {
    this.chatSymbolsAreOpen = true;
    this.chatSymboOpen = 1;
  }
  
  public CloseChatSymbols() {
    this.chatSymbolsAreOpen = false;
    this.chatSymboOpen = 0;
  }
}
