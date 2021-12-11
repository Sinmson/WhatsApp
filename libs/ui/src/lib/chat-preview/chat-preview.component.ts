import { Component } from '@angular/core';

@Component({
  selector: 'wa-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.scss']
})
export class ChatPreviewComponent  {

  chatIsOpen = false;
  
  // constructor() { }

  public CloseChat() {
    this.chatIsOpen = false;
  }

  public OpenChat() {
    this.chatIsOpen = true;
  }

}
