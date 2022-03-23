import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { E, I } from "@wa/models";

@Component({
  selector: 'wa-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  /**
   *  Define if the open chat fits to this chat preview
   */
  @Input()  
  openChat: any = null;
  @Output() 
  openChatChange = new EventEmitter<any>();

  protected _Messages: I.ChatMessage[] = [];
  public get Messages() { 
    return this._Messages; 
  }
  @Input()
  public set Messages(v: I.ChatMessage[]) { this._Messages = v; }

  public get MessagesWithFilledDates(): { isMessage: boolean, message: I.ChatMessage }[] {
    const ret : { isMessage: boolean, message: I.ChatMessage }[] = [];

    const msgs = [...this.Messages]; // copy, else the reverse will change the original array

    const msgsReversed = msgs.reverse(); // Now that are from [0] oldest to -> newest

    let currentDayFirstMsg = msgsReversed[0];
    console.log("MessagesWithFilledDates | msgs", this.Messages);
    console.log("MessagesWithFilledDates | msgsReversed", msgsReversed);
    console.log("MessagesWithFilledDates | currentDayFirstMsg 1", currentDayFirstMsg);

    if(currentDayFirstMsg) {
      ret.push({ isMessage: false, message: currentDayFirstMsg }); 
    }

    for(let i = 0; i < msgsReversed.length; i++) {
      const msg = msgsReversed[i];

      if(msg.date.getFullYear() !== currentDayFirstMsg.date.getFullYear()
      || msg.date.getMonth() !== currentDayFirstMsg.date.getMonth()
      || msg.date.getDate() !== currentDayFirstMsg.date.getDate()) {
        // different year, month or day      

        currentDayFirstMsg = msg;

        ret.push({ isMessage: false, message: currentDayFirstMsg }); 

        console.log("MessagesWithFilledDates | currentDayFirstMsg 2", currentDayFirstMsg);
      }

      ret.push({ isMessage: true, message: msg });
    }

    ret.reverse();

    console.log("MessagesWithFilledDates | ret", ret);

    return ret;
  }

  public get OpenChat() { return this.openChat; }
  public set OpenChat(val: any) { this.openChat =  val; this.openChatChange.emit(val); }




}
