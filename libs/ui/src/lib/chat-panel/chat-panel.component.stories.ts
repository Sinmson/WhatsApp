import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatPanelComponent } from './chat-panel.component';

export default {
  title: 'ChatPanelComponent',
  component: ChatPanelComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ChatPanelComponent>;

const Template: Story<ChatPanelComponent> = (args: ChatPanelComponent) => ({
  component: ChatPanelComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}