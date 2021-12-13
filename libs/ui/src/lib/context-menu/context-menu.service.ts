import { Injectable } from '@angular/core';
import { first, firstValueFrom, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {

  private entries: string[] = [];
  private baseElement: HTMLElement | null = null;
  private show = false;
  private sjSelectedIndex = new Subject<number>();

  public get Entries() { return this.entries; }
  public get BaseElement() { return this.baseElement; }
  public get Show() { return this.show; }

  // constructor() { }

  public async Open(baseElement: HTMLElement, entries: string[]) {
    this.Close(-1);
    console.log("ContextMenuService | Open", baseElement, entries);
    this.entries = entries;
    this.baseElement = baseElement;
    this.show = true;
    
    const selectedIndex = await firstValueFrom(this.sjSelectedIndex);
    return selectedIndex;
  }

  public Close(index: number) {
    this.show = false;

    this.sjSelectedIndex.next(index);
  }
}
