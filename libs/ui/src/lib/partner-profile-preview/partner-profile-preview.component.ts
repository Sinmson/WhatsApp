import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ContextMenuService } from "../context-menu/context-menu.service";

@Component({
  selector: 'wa-partner-profile-preview',
  templateUrl: './partner-profile-preview.component.html',
  styleUrls: ['./partner-profile-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnerProfilePreviewComponent {

  /**
   *  Define if the open chat fits to this chat preview
   */
  @Input()
  openChat: any = null;

  @Output()
  openChatChange = new EventEmitter<any>();

  public get OpenChat() { return this.openChat; }
  public set OpenChat(val: any) { this.openChat = val; this.openChatChange.emit(val); }

  protected _ContextMenuEntries: string[] = ["Kontaktinfo", "Nachrichten auswählen", "Chat schließen", "Benachr. stummschalten", "Nachrichten leeren", "Chat löschen"];
  public get ContextMenuEntries() { return this._ContextMenuEntries; }
  public set ContextMenuEntries(v: string[]) { this._ContextMenuEntries = v; }


  constructor(private contextMenuService: ContextMenuService) { }

  public async OpenContextMenu(e: Event) {
    console.log("UserProfilePreviewComponent | selectedIndex");
    e.stopPropagation(); // To not trigger click of the chat preview div 
    const selectedIndex = await this.contextMenuService.Open(e.target as HTMLElement, this.ContextMenuEntries, "bottom left");
    console.log("UserProfilePreviewComponent | selectedIndex", selectedIndex);

    if(selectedIndex === 2) {  // Chat schließen
      this.CloseChat();
    }
  }


  public CloseChat() {
    this.OpenChat = null;
  }


}
