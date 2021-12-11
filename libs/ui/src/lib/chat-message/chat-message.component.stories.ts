import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatMessageComponent } from './chat-message.component';

export default {
  title: 'ChatMessageComponent',
  component: ChatMessageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ChatMessageComponent>;

const Template: Story<ChatMessageComponent> = (args: ChatMessageComponent) => ({
  component: ChatMessageComponent,
  props: args,
});


export const Default = Template.bind({});
Default.args = {
  isMessageOfUser: true
};

export const FromUser = Template.bind({});
FromUser.args = {
  ...Default.args,
  isMessageOfUser: true
}

export const FromPartner = Template.bind({});
FromPartner.args = {
  ...Default.args,
  isMessageOfUser: false
}