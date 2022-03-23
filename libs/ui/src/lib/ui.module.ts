import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChatPreviewComponent } from './components/chat-preview/chat-preview.component';
import { UserProfilePreviewComponent } from './components/user-profile-preview/user-profile-preview.component';
import { AllChatSearchComponent } from './components/all-chat-search/all-chat-search.component';
import { PartnerProfilePreviewComponent } from './components/partner-profile-preview/partner-profile-preview.component';
import { MessageBarComponent } from './components/message-bar/message-bar.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatPanelComponent } from './components/chat-panel/chat-panel.component';
import { ChatsPanelComponent } from './components/chats-panel/chats-panel.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ContextMenuService } from "./components/context-menu/context-menu.service";

import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { SettingsPanelComponent } from './components/settings-panel/settings-panel.component';
import { OnDayPipe } from "./pipes/on-day.pipe";
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [CommonModule, PickerModule, HttpClientModule, FormsModule],
  providers: [ ContextMenuService ],
  declarations: [
    ChatPreviewComponent,
    UserProfilePreviewComponent,
    AllChatSearchComponent,
    PartnerProfilePreviewComponent,
    MessageBarComponent,
    ChatMessageComponent,
    ChatComponent,
    ChatPanelComponent,
    ChatsPanelComponent,
    ContextMenuComponent,
    SettingsPanelComponent,
    OnDayPipe
  ],
  exports: [
    ChatPreviewComponent,
    UserProfilePreviewComponent,
    AllChatSearchComponent,
    PartnerProfilePreviewComponent,
    MessageBarComponent,
    ChatMessageComponent,
    ChatComponent,
    ChatPanelComponent,
    ChatsPanelComponent,
    ContextMenuComponent,
    PickerModule,
    SettingsPanelComponent,
    OnDayPipe
  ],
})
export class UiModule {}
