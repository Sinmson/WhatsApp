import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';
import { UserProfilePreviewComponent } from './user-profile-preview/user-profile-preview.component';
import { AllChatSearchComponent } from './all-chat-search/all-chat-search.component';
import { PartnerProfilePreviewComponent } from './partner-profile-preview/partner-profile-preview.component';
import { MessageBarComponent } from './message-bar/message-bar.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatComponent } from './chat/chat.component';
import { ChatPanelComponent } from './chat-panel/chat-panel.component';
import { ChatsPanelComponent } from './chats-panel/chats-panel.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ContextMenuService } from "./context-menu/context-menu.service";

@NgModule({
  imports: [CommonModule],
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
    ContextMenuComponent
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
    ContextMenuComponent
  ],
})
export class UiModule {}
