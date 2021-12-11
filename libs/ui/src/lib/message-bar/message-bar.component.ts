import { Component } from '@angular/core';

@Component({
  selector: 'wa-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
})
export class MessageBarComponent  {

  chatSymbolsAreOpen = false;
  chatSymboOpen = 0;

  // constructor() { }


  public OpenChatSymbols() {
    this.chatSymbolsAreOpen = true;
    this.chatSymboOpen = 1;
  }
  
  public CloseChatSymbols() {
    this.chatSymbolsAreOpen = false;
    this.chatSymboOpen = 0;
  }

}
