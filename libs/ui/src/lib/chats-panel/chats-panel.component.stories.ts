import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AllChatSearchComponent } from "../all-chat-search/all-chat-search.component";
import { ChatPreviewComponent } from "../chat-preview/chat-preview.component";
import { UserProfilePreviewComponent } from "../user-profile-preview/user-profile-preview.component";
import { ChatsPanelComponent } from './chats-panel.component';

export default {
  title: 'WhatsApp/UI/Panels/ChatsPanel',
  component: ChatsPanelComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [UserProfilePreviewComponent, AllChatSearchComponent, ChatPreviewComponent]
    })
  ],
} as Meta<ChatsPanelComponent>;

const Template: Story<ChatsPanelComponent> = (args: ChatsPanelComponent) => ({
  component: ChatsPanelComponent,
  props: {
    ...args,
    args: {
      openChat: { id: -1 }
    }
  },
});


export const Default = Template.bind({});
Default.args = {
}

export const NoChatSelected = Template.bind({});
NoChatSelected.args = {
}

export const FirstChatSelected = Template.bind({});
FirstChatSelected.args = {
  openChat: { id: 0 }
}
export const SecondChatSelected = Template.bind({});
SecondChatSelected.args = {
  openChat: { id: 1 }
}