import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ContextMenuService } from "../context-menu/context-menu.service";

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

  protected _ContextMenuEntries: string[] = ["Chat archivieren", "Benachr. stummschalten", "Gruppe verlassen", "Chat fixieren", "Als ungelesen markieren"];
  public get ContextMenuEntries() { return this._ContextMenuEntries; }
  public set ContextMenuEntries(v: string[]) { this._ContextMenuEntries = v; }

  
  constructor(private contextMenuService: ContextMenuService) { }

  public OpenThisChat() {
    console.log("ChatPanelComponent | OpenChat");
    this.OpenChat = { id: this.Id };
  }

  public async OpenContextMenu(e: Event) {
    console.log("ChatPanelComponent (",this.Id,") | selectedIndex");
    e.stopPropagation(); // To not trigger click of the chat preview div 
    const selectedIndex = await this.contextMenuService.Open(e.target as HTMLElement, this.ContextMenuEntries, "bottom left");
    console.log("ChatPanelComponent (",this.Id,") | selectedIndex", selectedIndex);
  }
}
