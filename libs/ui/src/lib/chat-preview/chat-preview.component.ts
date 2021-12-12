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
  chatIsOpen = false;

  @Output() 
  chatIsOpenChange = new EventEmitter<boolean>();
  
  
  // constructor() { }

  public OpenChat() {
    this.chatIsOpen = true;
    this.chatIsOpenChange.emit(true);
  }

}
