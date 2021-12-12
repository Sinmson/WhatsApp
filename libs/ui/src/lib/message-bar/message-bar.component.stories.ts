import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MessageBarComponent } from './message-bar.component';

export default {
  title: 'WhatsApp/UI/MessageBarComponent',
  component: MessageBarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MessageBarComponent>;

const Template: Story<MessageBarComponent> = (args: MessageBarComponent) => ({
  component: MessageBarComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}