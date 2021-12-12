import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wa-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  /**
   *  Define if the open chat fits to this chat preview
   */
  @Input()  
  openChat: any = null;
  @Output() 
  openChatChange = new EventEmitter<any>();

  protected _Messages: string[] = [];
  public get Messages() { 
    return this._Messages; 
  }
  @Input()
  public set Messages(v: string[]) { this._Messages = v; }

  public get OpenChat() { return this.openChat; }
  public set OpenChat(val: any) { this.openChat =  val; this.openChatChange.emit(val); }




}
