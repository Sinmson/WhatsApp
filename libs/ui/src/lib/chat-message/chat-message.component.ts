import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'wa-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ChatMessageComponent  {

  @Input()
  isMessageOfUser = true;
  // constructor() { }

  

}
