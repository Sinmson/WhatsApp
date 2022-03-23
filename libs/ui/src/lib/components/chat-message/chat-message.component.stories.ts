import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { E } from "@wa/models";
import { ContextMenuComponent } from "../context-menu/context-menu.component";
import { ContextMenuService } from "../context-menu/context-menu.service";
import { ChatMessageComponent } from './chat-message.component';

export default {
  title: 'WhatsApp/UI/Components/ChatMessageComponent',
  component: ChatMessageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [ContextMenuService],
      declarations: [ ContextMenuComponent ]
    }),
    // With template
    // componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`),
    // With component which contains ng-content
    // componentWrapperDecorator(ChatComponent),
  ],  
  
  argTypes: {
    status: { 
      defaultValue: E.ChatMessageStatus.sent, 
      description: "Define the status of the message", 
      name: "status",
      options: Object.values(E.ChatMessageStatus),
      // type: "string",
      control: {
        type: "select"
      }
    }
  },
} as Meta<ChatMessageComponent>;

const Template: Story<ChatMessageComponent> = (args: ChatMessageComponent) => ({
  component: ChatMessageComponent,
  props: {
    ...args,
  },
});


export const Default = Template.bind({});
Default.args = {
  isMessageOfUser: true,
  message: "",
  status: E.ChatMessageStatus.delivered
};

export const FromUser = Template.bind({});
FromUser.args = {
  ...Default.args,
  isMessageOfUser: true,
  message: "Hallo :)"
}

export const FromPartner = Template.bind({});
FromPartner.args = {
  ...Default.args,
  isMessageOfUser: false,
  message: "Hi :)"
}

export const Sent = Template.bind({});
Sent.args = {
  ...FromUser.args,
  status: E.ChatMessageStatus.sent
}

export const Delivered = Template.bind({});
Delivered.args = {
  ...FromUser.args,
  status: E.ChatMessageStatus.delivered
}

export const Received = Template.bind({});
Received.args = {
  ...FromUser.args,
  status: E.ChatMessageStatus.received
}


export const Read = Template.bind({});
Read.args = {
  ...FromUser.args,
  status: E.ChatMessageStatus.read
}

export const Failed = Template.bind({});
Failed.args = {
  ...FromUser.args,
  status: E.ChatMessageStatus.failed
}

export const Deleted = Template.bind({});
Deleted.args = {
  ...FromUser.args,
  status: E.ChatMessageStatus.deleted
}


export const LongMsgFromUser = Template.bind({});
LongMsgFromUser.args = {
  ...FromUser.args,
  isMessageOfUser: true,
  status: E.ChatMessageStatus.delivered,
  message: `ich glaube die haben vor deinen container noch einen nginx gestellt (?) und die weiterleitung stimmt nicht ganz. Weil wenn du /test lokal (im container) aufrufst, wirdst du auf / und somit /login weitgergeleitet. Gehst du auf /api bekommst du eine fehlermeldung (von der api).

Wenn du auf http://ariston.informatik.uni-leipzig.de:34562/test gehst, bleibst du auf /test und er sagt dir, dass er die seite nicht finden kann. Und wenn du auf /api gehst, sagt er dir auch, dass er die seite nicht finden kann. Selbst, wenn du auf /login gehst, kann er das nicht finden. Vergleich das mal, lokaler container und die webseite. Ich vermute die haben etwas falsch konfiguriert`
}


export const LongMsgFromPartner = Template.bind({});
LongMsgFromPartner.args = {
  ...FromPartner.args,
  status: E.ChatMessageStatus.delivered,
  isMessageOfUser: false,
  message: `ich glaube die haben vor deinen container noch einen nginx gestellt (?) und die weiterleitung stimmt nicht ganz. Weil wenn du /test lokal (im container) aufrufst, wirdst du auf / und somit /login weitgergeleitet. Gehst du auf /api bekommst du eine fehlermeldung (von der api).

Wenn du auf http://ariston.informatik.uni-leipzig.de:34562/test gehst, bleibst du auf /test und er sagt dir, dass er die seite nicht finden kann. Und wenn du auf /api gehst, sagt er dir auch, dass er die seite nicht finden kann. Selbst, wenn du auf /login gehst, kann er das nicht finden. Vergleich das mal, lokaler container und die webseite. Ich vermute die haben etwas falsch konfiguriert`
}