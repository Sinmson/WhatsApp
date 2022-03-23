import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { E, I } from "@wa/models";
import { UiModule } from "../../ui.module";
import { ChatMessageComponent } from "../chat-message/chat-message.component";
import { ChatComponent } from './chat.component';

export default {
  title: 'WhatsApp/UI/Components/ChatComponent',
  component: ChatComponent,
  decorators: [
    moduleMetadata({
      imports: [UiModule],
      declarations: []
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

const msg: I.ChatMessage = {
  date: new Date(2021, 11),
  message: "",
  status: E.ChatMessageStatus.read,
  userId: 0,
  username: "Username"
};

export const WithMessages = Template.bind({});
WithMessages.args = {
  ...WithoutMessages.args,
  Messages: [{ ...msg, date: new Date(), message: "This made him feel like an old-style rootbeer float smells. The door swung open to reveal pink giraffes and red elephants." }, 
  { ...msg, date: new Date(new Date().setDate(new Date().getDate()-1)), message: "The reservoir water level continued to lower while we enjoyed our long shower. It was getting dark, and we weren’t there yet." }, 
  { ...msg, date: new Date(new Date().setDate(new Date().getDate()-2)), message: "Normal activities took extraordinary amounts of concentration at the high altitude.He would only survive if he kept the fire going and he could hear thunder in the distance. A song can make or ruin a person’s day if they let it get to them. She had convinced her kids that any mushroom found on the ground would kill them if they touched it." }, 
  { ...msg, date: new Date(new Date().setDate(new Date().getDate()-2)), message: "I'd always thought lightning was something only I could see. I am counting my calories, yet I really want dessert. For the 216th time, he said he would quit drinking soda after this last Coke." }, 
  { ...msg, date: new Date(new Date().setDate(new Date().getDate()-3)), message: "Wisdom is easily acquired when hiding under the bed with a saucepan on your head." }, 
  { ...msg, date: new Date(new Date().setDate(new Date().getDate()-4)), message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" }, 
  { ...msg, date: new Date(new Date().setDate(new Date().getDate()-5)), message: "Hi :)" }, 
  { ...msg, date: new Date(new Date().setDate(new Date().getDate()-6)), message: "Hallo" }]
}