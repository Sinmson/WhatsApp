import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatPreviewComponent } from './chat-preview.component';

import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
import { screen, userEvent, waitFor, within } from '@storybook/testing-library';

export default {
  title: 'WhatsApp/UI/Components/ChatPreviewComponent',
  component: ChatPreviewComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
  args: {
    openChat: null,
    // openChatChange: action("openChatChange"),
  },
  argTypes: {
    openChat: { 
      defaultValue: null, 
      description: "Define which chat is opened", 
      name: "openChat"
    }
  },
  parameters: {
    // docs: {
    //   description: {
    //     component: "Some component _makdown_"
    //   }
    // }
  }
} as Meta<ChatPreviewComponent>;

const Template: Story<ChatPreviewComponent> = (args: ChatPreviewComponent) => ({
  component: ChatPreviewComponent,
  props: {
    ...args,

    // openChatChange: action("openChatChange"),
    openChatChange: (...args: any[]) => { 
      action("openChatChange")(...args);
      // linkTo("WhatsApp/UI/ChatMessageComponent", "Default")(...args);
    },
  },
});


export const Default = Template.bind({});

export const ChatIsClosed = Template.bind({});
ChatIsClosed.args = {
  openChat: null
}

export const OpenChat = Template.bind({});
OpenChat.args = {
  openChat: {}
}


export const ChatClicked = Template.bind({});
ChatClicked.play = async () => {  
  // https://storybook.js.org/docs/angular/writing-stories/play-function
  // https://testing-library.com/docs/queries/about/
  const btn = screen.getByRole("button");
  userEvent.click(btn);
}
