import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';
import { UserProfilePreviewComponent } from './user-profile-preview/user-profile-preview.component';
import { AllChatSearchComponent } from './all-chat-search/all-chat-search.component';
import { PartnerProfilePreviewComponent } from './partner-profile-preview/partner-profile-preview.component';
import { MessageBarComponent } from './message-bar/message-bar.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ChatPreviewComponent,
    UserProfilePreviewComponent,
    AllChatSearchComponent,
    PartnerProfilePreviewComponent,
    MessageBarComponent,
    ChatMessageComponent
  ],
  exports: [
    ChatPreviewComponent,
    UserProfilePreviewComponent,
    AllChatSearchComponent,
    PartnerProfilePreviewComponent,
    MessageBarComponent,
    ChatMessageComponent
  ],
})
export class UiModule {}
