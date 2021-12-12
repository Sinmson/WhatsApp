import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatPreviewComponent } from './chat-preview.component';

import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
import { screen, userEvent, waitFor, within } from '@storybook/testing-library';

export default {
  title: 'WhatsApp/UI/ChatPreviewComponent',
  component: ChatPreviewComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
  args: {
    chatIsOpen: false,
    // chatIsOpenChange: action("chatIsOpenChange"),
  },
  argTypes: {
    chatIsOpen: { 
      defaultValue: "false", 
      description: "Define if the open chat fits to this chat preview", 
      name: "chatIsOpen", 
      type: "boolean",
      control: { type: 'boolean' } 
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

    // chatIsOpenChange: action("chatIsOpenChange"),
    chatIsOpenChange: (...args: any[]) => { 
      action("chatIsOpenChange")(...args);
      // linkTo("WhatsApp/UI/ChatMessageComponent", "Default")(...args);
    },
  },
});


export const Default = Template.bind({});

export const ChatIsClosed = Template.bind({});
ChatIsClosed.args = {
  chatIsOpen: false
}

export const ChatIsOpen = Template.bind({});
ChatIsOpen.args = {
  chatIsOpen: true
}


export const ChatClicked = Template.bind({});
ChatClicked.play = async () => {  
  // https://storybook.js.org/docs/angular/writing-stories/play-function
  // https://testing-library.com/docs/queries/about/
  const btn = screen.getByRole("button");
  userEvent.click(btn);
}
