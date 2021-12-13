import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wa-chats-panel',
  templateUrl: './chats-panel.component.html',
  styleUrls: ['./chats-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatsPanelComponent  {


  /**
   *  Define if the open chat fits to this chat preview
   */
   @Input()  
   openChat: any = null;
 
   @Output() 
   openChatChange = new EventEmitter<any>();
 
   public get OpenChat() { return this.openChat; }
   public set OpenChat(val: any) { this.openChat =  val; this.openChatChange.emit(val); }

  // constructor() { }

  

}
