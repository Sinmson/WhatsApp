import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatPreviewComponent } from './chat-preview.component';

export default {
  title: 'ChatPreviewComponent',
  component: ChatPreviewComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ChatPreviewComponent>;

const Template: Story<ChatPreviewComponent> = (args: ChatPreviewComponent) => ({
  component: ChatPreviewComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}