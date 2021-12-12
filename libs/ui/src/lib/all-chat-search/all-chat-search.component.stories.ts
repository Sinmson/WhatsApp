import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AllChatSearchComponent } from './all-chat-search.component';

export default {
  title: 'WhatsApp/UI/AllChatSearchComponent',
  component: AllChatSearchComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AllChatSearchComponent>;

const Template: Story<AllChatSearchComponent> = (args: AllChatSearchComponent) => ({
  component: AllChatSearchComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}