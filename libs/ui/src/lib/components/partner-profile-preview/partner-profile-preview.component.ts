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

  @Input()
  name = "<Name>";

  @Input()
  lastOnline : Date | null = null;

  @Input()
  profilePicSrc = "";

  @Input()
  isOnline = false;

  @Output()
  openChatChange = new EventEmitter<any>();

  public get StatusString() {
    if(this.isOnline) {
      return "Online";
    }

    if(!this.lastOnline) {
      return "";
    } else {
      const diffInMs = Date.now() - this.lastOnline.getTime();
      if(diffInMs < 0) {
        return "";
      } else if(( diffInMs) >  (1000 * 60 * 60 * 24 * 2) ) {
        const dateStr = this.lastOnline.toLocaleDateString();
        return `zuletzt online am ${dateStr}`;
      } 
      const todayOrYesterday = this.lastOnline.getDay() === new Date().getDay() ? "heute" : "gestern";
      const hoursStr = this.lastOnline.toLocaleTimeString( [ navigator.language, "en-US"], { hour: '2-digit', minute:'2-digit'} );
      return `zuletzt online ${todayOrYesterday} um ${hoursStr}`;
    }
  }

  public get OpenChat() { return this.openChat; }
  public set OpenChat(val: any) { this.openChat = val; this.openChatChange.emit(val); }

  protected _ContextMenuEntries: string[] = ["Kontaktinfo", "Nachrichten auswählen", "Chat schließen", "Benachr. stummschalten", "Nachrichten leeren", "Chat löschen"];
  public get ContextMenuEntries() { return this._ContextMenuEntries; }
  public set ContextMenuEntries(v: string[]) { this._ContextMenuEntries = v; }


  constructor(private contextMenuService: ContextMenuService) {    
  }

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
