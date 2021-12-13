import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ContextMenuService } from "./context-menu.service";

@Component({
  selector: 'wa-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent {


  protected _Entries: string[] = [];
  public get Entries() { return this._Entries; }
  @Input()
  public set Entries(v: string[]) { 
    this._Entries = v; 
  }

  protected _Show = false;
  public get Show() { return this._Show; }
  @Input()
  public set Show(v: boolean) { 
    if(v) {
      this.OpenFromShowChange();
    }

    this._Show = v; 
  }

    

  protected _BaseElement: HTMLElement | null = null;
  public get BaseElement() { return this._BaseElement; }
  @Input()
  public set BaseElement(v: HTMLElement | null) { 
    this._BaseElement = v; 
  }

  protected _Direction = "top-left";
  public get Direction() { return this._Direction; }
  public set Direction(v: string) { this._Direction = v; }

  @Output()
  entrySelect = new EventEmitter<number>();

  protected currentHandler = (e: Event) => { return; };

  public get Position() { 
    const rect = this.BaseElement?.getBoundingClientRect();
    const pos = {
      left: rect ? (rect.left + window.scrollX + "px") : 0,
      top: rect ? (rect.top + window.scrollY + "px") : 0
    };
    console.log("ContextMenuComponent | Position", rect, pos);
    return pos;
  }

  protected OpenFromShowChange() {
    console.log("OpenFromShowChange | Show", this.Show);
    // Context menu is opening, 
    // we need to register an event listener to check outside clicks

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    document.addEventListener("click", function handler(e: Event) {
      that.currentHandler = handler;
      console.log("ContextMenuComponent | click", e.target);
      if(e.target !== that.BaseElement) {
        that.Close(e);
      }
    });
  }
  

  public Close(e: Event, index = -1) {
    console.log("ContextMenuComponent | Close", index, e);
    document.removeEventListener("click", this.currentHandler);
    e.stopPropagation();
    this.entrySelect.emit(index);
  }


}
