import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ContextMenuService } from "../context-menu/context-menu.service";

@Component({
  selector: 'wa-user-profile-preview',
  templateUrl: './user-profile-preview.component.html',
  styleUrls: ['./user-profile-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class UserProfilePreviewComponent  {

  @Output()
  openSettings = new EventEmitter();

  protected _ContextMenuEntries: string[] = ["Neue Gruppe", "Mit Stern makierte Nachrichten", "Einstellungen", "Abmelden"];
  public get ContextMenuEntries() { return this._ContextMenuEntries; }
  public set ContextMenuEntries(v: string[]) { this._ContextMenuEntries = v; }

  
  constructor(private contextMenuService: ContextMenuService) { }

  public async OpenContextMenu(e: Event) {
    console.log("UserProfilePreviewComponent | selectedIndex");
    e.stopPropagation(); // To not trigger click of the chat preview div 
    const selectedIndex = await this.contextMenuService.Open(e.target as HTMLElement, this.ContextMenuEntries, "bottom left");
    console.log("UserProfilePreviewComponent | selectedIndex", selectedIndex);
    if(selectedIndex === 2) { // Einstellungen -> Settings
      this.openSettings.emit();
    }
  }

}
