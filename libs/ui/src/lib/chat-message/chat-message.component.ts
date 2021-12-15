import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContextMenuService } from "../context-menu/context-menu.service";

export enum ChatMessageStatus {
  sent = "SENT", // rectangle with clock
  delivered = "DELIVERED", // one tick
  received = "RECEIVED", // two ticks
  read = "READ", // two blue ticks
  failed = "FAILED", // red triangle
  deleted = "DELETED" // this message was deleted
}

@Component({
  selector: 'wa-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ChatMessageComponent  {

  @Input()
  isMessageOfUser = true;

  @Input()
  message = "<Message>";

  @Input()
  status: ChatMessageStatus = ChatMessageStatus.sent;

  @Input()
  date: Date = new Date();

  public get WasSent() { return this.status === ChatMessageStatus.sent; }
  public get WasDelivered() { return this.status === ChatMessageStatus.delivered; }
  public get WasReceived() { return this.status === ChatMessageStatus.received; }
  public get WasRead() { return this.status === ChatMessageStatus.read; }
  public get WasFailed() { return this.status === ChatMessageStatus.failed; }
  public get WasDeleted() { return this.status === ChatMessageStatus.deleted; }

  public get TimeString() { return this.date.toLocaleTimeString( [ navigator.language, "en-US"], { hour: '2-digit', minute:'2-digit'} ); }


  protected _ContextMenuEntries: string[] = ["Nachrichteninfo", "Antworten", "Nachricht weiterleiten", "Nachricht mit Stern markieren", "Nachricht löschen"];
  public get ContextMenuEntries() { return this._ContextMenuEntries; }
  public set ContextMenuEntries(v: string[]) { this._ContextMenuEntries = v; }


  constructor(private contextMenuService: ContextMenuService) { }

  public async OpenContextMenu(e: Event) {
    console.log("UserProfilePreviewComponent | selectedIndex");
    e.stopPropagation(); // To not trigger click of the chat preview div 
    const selectedIndex = await this.contextMenuService.Open(e.target as HTMLElement, this.ContextMenuEntries, "bottom left");
    console.log("UserProfilePreviewComponent | selectedIndex", selectedIndex);

    // TODO: Make this right (with server and response and popup and all of this stuff)
    if(selectedIndex === 4) {  // Nachricht löschen
      this.status = ChatMessageStatus.deleted;

    }
  }
}
