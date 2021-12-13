import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatMessageComponent } from "../chat-message/chat-message.component";
import { ChatComponent } from "../chat/chat.component";
import { MessageBarComponent } from "../message-bar/message-bar.component";
import { PartnerProfilePreviewComponent } from "../partner-profile-preview/partner-profile-preview.component";
import { ChatPanelComponent } from './chat-panel.component';

import * as ChatStories from "../chat/chat.component.stories";

export default {
  title: 'WhatsApp/UI/Panels/ChatPanel',
  component: ChatPanelComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [PartnerProfilePreviewComponent, ChatComponent, MessageBarComponent, ChatMessageComponent]
    })
  ],
} as Meta<ChatPanelComponent>;

const Template: Story<ChatPanelComponent> = (args: ChatPanelComponent) => ({
  component: ChatPanelComponent,
  props: {
    ...args,
    args: {
      openChat: null,
      Messages: []
    }
  },
});



export const Default = Template.bind({});
Default.args = {
  openChat: null,
  Messages: []
}

export const ClosedChat = Template.bind({});
ClosedChat.args = {
  ...Default.args,
  ... ChatStories.Default.args
}

export const EmptyChat = Template.bind({});
EmptyChat.args = {
  ...Default.args,
  ... ChatStories.WithoutMessages.args
}

export const ChatWithMessages = Template.bind({});
ChatWithMessages.args = {
  ...Default.args,
  ... ChatStories.WithMessages.args
}