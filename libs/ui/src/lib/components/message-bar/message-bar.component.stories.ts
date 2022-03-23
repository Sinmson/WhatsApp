import { EmojiModule } from "@ctrl/ngx-emoji-mart/ngx-emoji";
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiModule } from "../../ui.module";
import { MessageBarComponent } from './message-bar.component';

export default {
  title: 'WhatsApp/UI/Components/MessageBarComponent',
  component: MessageBarComponent,
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    })
  ],
} as Meta<MessageBarComponent>;

const Template: Story<MessageBarComponent> = (args: MessageBarComponent) => ({
  component: MessageBarComponent,
  props: {
    ...args
  },
});


export const Default = Template.bind({});
Default.args = {
  
}

export const Smileys = Template.bind({});
Smileys.args = {
  chatSymboOpen: 1
}

export const GIFs = Template.bind({});
GIFs.storyName = "GIFs";
GIFs.args = {
  chatSymboOpen: 2
}

export const Stickers = Template.bind({});
Stickers.args = {
  chatSymboOpen: 3
}