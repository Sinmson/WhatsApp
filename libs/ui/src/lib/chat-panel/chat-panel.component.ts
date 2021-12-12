import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wa-chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.scss']
})
export class ChatPanelComponent  {
  /**
   *  Define if the open chat fits to this chat preview
   */
  @Input()  
  openChat: any = null;
  @Output() 
  openChatChange = new EventEmitter<any>();
  
  protected _Messages: string[] = [];
  public get Messages() { 
    // TODO: Remove when we have real openChat and messages
    if(this.OpenChat) {
      return ["REMOVE ME"];
    }
    return this._Messages; 
  }
  public set Messages(v: string[]) { this._Messages = v; }

  public get OpenChat() { return this.openChat; }
  public set OpenChat(val: any) { 
    console.log("ChatPanelComponent | OpenChat", val);
    this.openChat =  val; this.openChatChange.emit(val); 
  }
  

}
