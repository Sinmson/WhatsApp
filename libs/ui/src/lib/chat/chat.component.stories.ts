import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatMessageComponent } from "../chat-message/chat-message.component";
import { ChatComponent } from './chat.component';

export default {
  title: 'WhatsApp/UI/Components/ChatComponent',
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
      openChat: null,
      Messages: []
    }
  },
});


export const Default = Template.bind({ });
Default.args = { 
  openChat: null,
  Messages: []
}

export const WithoutMessages = Template.bind({});
WithoutMessages.args = {
  ...Default.args,
  openChat: { id: 0 }
}

export const WithMessages = Template.bind({});
WithMessages.args = {
  ...WithoutMessages.args,
  Messages: ["This made him feel like an old-style rootbeer float smells. The door swung open to reveal pink giraffes and red elephants.", "The reservoir water level continued to lower while we enjoyed our long shower. It was getting dark, and we weren’t there yet.", 
  "Normal activities took extraordinary amounts of concentration at the high altitude.He would only survive if he kept the fire going and he could hear thunder in the distance. A song can make or ruin a person’s day if they let it get to them. She had convinced her kids that any mushroom found on the ground would kill them if they touched it.", 
  "I'd always thought lightning was something only I could see. I am counting my calories, yet I really want dessert. For the 216th time, he said he would quit drinking soda after this last Coke.", 
  "Wisdom is easily acquired when hiding under the bed with a saucepan on your head.", 
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam", 
  "Hi :)", 
  "Hallo"]
}