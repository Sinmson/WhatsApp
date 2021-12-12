import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wa-partner-profile-preview',
  templateUrl: './partner-profile-preview.component.html',
  styleUrls: ['./partner-profile-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class PartnerProfilePreviewComponent  {

  /**
   *  Define if the open chat fits to this chat preview
   */
   @Input()  
   openChat: any = null;
 
   @Output() 
   openChatChange = new EventEmitter<any>();

   public get OpenChat() { return this.openChat; }
   public set OpenChat(val: any) { this.openChat =  val; this.openChatChange.emit(val); }

   
  // constructor() { }

  public CloseChat() {
    this.OpenChat = null;
  }
  

}
