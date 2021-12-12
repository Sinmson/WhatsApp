import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatMessageComponent } from "../chat-message/chat-message.component";
import { ChatComponent } from './chat.component';

export default {
  title: 'WhatsApp/UI/ChatComponent',
  component: ChatComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [ChatMessageComponent]
    })
  ],
} as Meta<ChatComponent>;

const Template: Story<ChatComponent> = (args: ChatComponent) => ({
  component: ChatComponent,
  props: {
    ...args,
    args: {
      Messages: []
    }
  },
});


export const Default = Template.bind({});


export const WithoutMessages = Template.bind({});
WithoutMessages.args = {

}

export const WithMessages = Template.bind({});
WithMessages.args = {
  Messages: ["Hallo"]
}