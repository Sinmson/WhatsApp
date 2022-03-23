import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit, ViewChild, AfterViewChecked, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ContextMenuService } from "./context-menu.service";


export type ContextMenuDirection = "top" | "bottom" | "center" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right";
@Component({
  selector: 'wa-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent implements AfterViewChecked {


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
    this.TmpDirection = this.Direction;
  }


  protected _Direction: ContextMenuDirection = "bottom right";
  public get Direction() { return this._Direction; }
  @Input()
  public set Direction(v: ContextMenuDirection) { this._Direction = v; }

  protected _TmpDirection: ContextMenuDirection = "bottom right";
  protected get TmpDirection() { return this._TmpDirection; }
  protected set TmpDirection(v: ContextMenuDirection) { this._TmpDirection = v; }
  public get InvertedDirection() { return this.InvertDirection(this.TmpDirection); }

  @ViewChild("waContextMenu")
  elContextMenu!: ElementRef;

  @Output()
  entrySelect = new EventEmitter<number>();

  constructor(private cd: ChangeDetectorRef) {
    
  }

  protected currentHandler = (e: Event) => { return; };

  public get NgStyle() { 
    const rect = this.BaseElement?.getBoundingClientRect();
    if(!rect) { return {}; }
    const pos = {
      left: rect.left + window.scrollX ,
      top: rect.top + window.scrollY
    };

    let transform = "";
    const directions = this.TmpDirection.split(" ");
    
    if(directions[0] === "top") {
      transform += "translateY(-100%) ";
    } else if(directions[0] === "bottom") {
      transform += "translateY(0%) ";
      pos.top += rect.height;
    } else {
      transform += "translateY(-50%) ";
      pos.top += (rect.height / 2);
    }
    
    if(directions[1] === "left") {
      transform += "translateX(-100%) ";
      pos.left += rect.width;
    } else if(directions[1] === "right") {
      transform += "translateX(0%) ";
    } else {
      if(directions[0] === "left") {
        transform += "translateX(-100%) ";
      } else if(directions[0] === "right") {
        transform += "translateX(0%) ";
        pos.left += rect.width;
      } else {
        transform += "translateX(-50%) ";
        pos.left += (rect.width / 2);
      }
    }

    console.log("ContextMenuComponent | Position", rect, pos);
    const ngStyle = {
      top: pos.top + "px",
      left: pos.left + "px",
      "transform": transform,
    }
    console.log("ContextMenuComponent | ngStyle", ngStyle);
    return ngStyle;
  }

  public get NgStyle2() {    
    const ngStyle2 = {
      "transform-origin": this.InvertedDirection
    }
    console.log("ContextMenuComponent | ngStyle", ngStyle2);
    return ngStyle2;
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

  ngAfterViewChecked(): void {
    if(this.Show && !!this.BaseElement 
      && !!this.elContextMenu?.nativeElement 
      && !this.IsInViewport(this.elContextMenu.nativeElement)) {
        console.log("ngAfterViewChecked | elContextMenu", this.elContextMenu);
        console.log("ngAfterViewChecked | elContextMenu is in viewport", this.IsInViewport(this.elContextMenu.nativeElement));
        console.log("ngStyle", this.NgStyle);
      const directionWithMostSpace = this.DirectionWithMostSpace(this.BaseElement, this.elContextMenu.nativeElement);
      if(directionWithMostSpace !== this.TmpDirection) {
        console.log("CHANGE DIRECTION TO", directionWithMostSpace)
        this.TmpDirection = directionWithMostSpace;
        this.cd.detectChanges();
      }
    }
  }
  

  public Close(e: Event, index = -1) {
    console.log("ContextMenuComponent | Close", index, e);
    document.removeEventListener("click", this.currentHandler);
    e.stopPropagation();
    this.entrySelect.emit(index);
  }

  public InvertDirection(direction: ContextMenuDirection): ContextMenuDirection {
    console.log("InvertDirection | direction", direction);
    switch(direction) {
      case "top":
        return "bottom";
      case"bottom":
        return "top";
      case"center":
        return "center";
      case"left":
        return "right";
      case"right":
        return "left";
      case"top left":
        return "bottom right";
      case"top right":
        return "bottom left";
      case"bottom left":
        return "top right";
      case"bottom right":
      default:
        return "top left";
    }
  }

  protected IsInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  protected DirectionWithMostSpace(elBase: HTMLElement, elToPlace: HTMLElement): ContextMenuDirection {    
    const innerHeight = (window.innerHeight || document.documentElement.clientHeight);
    const innerWidth = (window.innerWidth || document.documentElement.clientWidth);

    // Maybe we need to think about scrollX and scrollY, but idk lol

    const elBaseRect = elBase.getBoundingClientRect();
    const elToPlaceRect = elToPlace.getBoundingClientRect();

    const spaceTo: {[key: string]: number} = {
      top: elBaseRect.top - elToPlaceRect.height,
      bottom: innerHeight - elBaseRect.top - elToPlaceRect.height,
      left: elBaseRect.left - elToPlaceRect.width,
      right: innerWidth - elBaseRect.left - elToPlaceRect.width
    } 

    const isEnoughtSpace: {[key: string]: boolean} = {
      top: spaceTo.top > 0,
      bottom: spaceTo.bottom > 0,
      left: spaceTo.left > 0,
      right: spaceTo.right  > 0
    }


    // If enought splace with centerd at y and x axis
    const isEnoughtSplaceCenteredY = elBaseRect.top < (elToPlaceRect.height / 2) && (innerHeight - elBaseRect.bottom) < (elToPlaceRect.height / 2);
    const isEnoughtSplaceCenteredX = elBaseRect.left < (elToPlaceRect.width / 2) && (innerWidth - elBaseRect.right) < (elToPlaceRect.width / 2);

    // Now we try to keep the developers wished direction
    const wishedDirections = this.Direction.split(" ");
    const wishedDirectionX = (wishedDirections.length > 1 ? wishedDirections[1] : wishedDirections[0]) as "left" | "center" | "bottom";
    const wishedDirectionY = (wishedDirections.length > 1 ? wishedDirections[0] : "center") as "top" | "center" | "bottom";
    
    let directionX = wishedDirectionX;
    let directionY = wishedDirectionY;

    let bestDirectionX = Object.entries(spaceTo).filter(e => ["left", "right"].includes(e[0])).reduce( (p, c) => p[1] > c[1] ? p : c)[0];
    const spaceXBest = spaceTo[bestDirectionX];
    const spaceXOther = spaceTo[this.InvertDirection(bestDirectionX as never)];
    const spaceLRIFCentered = (spaceXOther + spaceXBest) / 2;
    // check if using center would get us more space then using the calculated best direction left or right
    bestDirectionX = spaceLRIFCentered > spaceXBest ? "center" : bestDirectionX;
    
    let bestDirectionY = Object.entries(spaceTo).filter(e => ["top", "bottom"].includes(e[0])).reduce( (p, c) => p[1] > c[1] ? p : c)[0];
    const spaceYBest = spaceTo[bestDirectionY]; // space on the best side
    const spaceYOther = spaceTo[this.InvertDirection(bestDirectionY as never)]; // space on the other side
    const spaceTBIFCentered = (spaceYOther + spaceYBest) / 2;
    // check if using center would get us more space then using the calculated best direction top or bottom
    bestDirectionY = spaceTBIFCentered > spaceYBest ? "center" : bestDirectionY;

    // I know, I know, we could now assign the directions to the best calculated directions
    // But I want to respect the wishes of the developer/configurator
    // We try to make it fitting, it it does not fit we inverse, if we cant inverse, we take the best position

    // wished direction
    if(this.Direction === "center") {
      if(!isEnoughtSplaceCenteredX) {
        // Centering does not work, take the side with the most space (can be left, right or still center)
        directionX = bestDirectionX as never;
      }
      if(!isEnoughtSplaceCenteredY) {
        // Centering does not work, take the side with the most space (can be top, bottom or still center)
        directionY = bestDirectionY as never;
      }
    } 
    if(wishedDirectionX !== "center" && !isEnoughtSpace[wishedDirectionX]) {
      directionX = this.InvertDirection(wishedDirectionX) as never; // only can be left or right
      
      if(!isEnoughtSpace[directionX]) { // inverted direction also does not have enough space,  take best direction
        directionX = bestDirectionX as never;
      }
    } 
    if(wishedDirectionY !== "center" && !isEnoughtSpace[wishedDirectionY]) {
      directionY = this.InvertDirection(wishedDirectionY) as never; // only can be top or bottom
      
      if(!isEnoughtSpace[directionY]) { // inverted direction also does not have enough space, take best direction
        directionY = bestDirectionY as never;
      }
    }    

    const direction = `${directionY} ${directionX}`.replace("center", "").trim() as ContextMenuDirection;

    /*
    console.log("elBaseRect", elBaseRect);
    console.log("elBaseCenter", elBaseCenter);

    console.log("elToPlaceRect", elToPlaceRect);

    console.log("spaceTo", spaceTo);
    console.log("isEnoughtSpace", isEnoughtSpace);
    console.log("isEnoughtSplaceCenteredY", isEnoughtSplaceCenteredY);
    console.log("isEnoughtSplaceCenteredX", isEnoughtSplaceCenteredX);

    console.log("spaceLRIFCentered",  spaceXBest, spaceXOther, spaceLRIFCentered);
    console.log("spaceTBIFCentered", spaceYBest, spaceYOther, spaceTBIFCentered);

    console.log("wishedDirections", wishedDirections);
    console.log("wishedDirectionX", wishedDirectionX);
    console.log("wishedDirectionY", wishedDirectionY);

    console.log("bestDirectionX", bestDirectionX);
    console.log("bestDirectionY", bestDirectionY);

    console.log("directionX", directionX);
    console.log("directionY", directionY);

    console.log("direction", direction);
    */

    return direction;
  }


}
