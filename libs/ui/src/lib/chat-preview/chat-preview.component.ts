import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Test
 *
 * @export
 * @class ChatPreviewComponent
 */
@Component({
  selector: 'wa-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ChatPreviewComponent  {
  /**
   *  Define if the open chat fits to this chat preview
   */
  @Input()  
  openChat: any = null;

  @Output() 
  openChatChange = new EventEmitter<any>();

  public get OpenChat() { return this.openChat; }
  public set OpenChat(val: any) { this.openChat =  val; this.openChatChange.emit(val); }

  // TODO: Remove when we have models
  protected _Id = -1;
  public get Id() { return this._Id; }
  @Input()
  public set Id(v: number) { this._Id = v; }
  
  // constructor() { }

  public OpenThisChat() {
    console.log("ChatPanelComponent | OpenChat");
    this.OpenChat = { id: this.Id };
  }
}
