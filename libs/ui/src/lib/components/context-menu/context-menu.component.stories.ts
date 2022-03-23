import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ContextMenuComponent } from './context-menu.component';

export default {
  title: 'WhatsApp/UI/Components/ContextMenuComponent',
  component: ContextMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ContextMenuComponent>;

const Template: Story<ContextMenuComponent> = (args: ContextMenuComponent) => ({
  component: ContextMenuComponent,
  props: {
    ...args,
    args: {
      entries: [],
      show: false
    }
  },
});


export const Default = Template.bind({});
Default.args = {
  Entries: [],
  Show: false
}

export const NoEntries = Template.bind({});
NoEntries.args = {
  ...Default.args
}

export const WithEntriesHidden = Template.bind({});
WithEntriesHidden.args = {
  ...Default.args,
  Entries: ["Chat archivieren", "Benachr. stummschalten", "Gruppe verlassen", "Chat fixieren", "Als ungelesen markieren"]
}

export const WithEntriesShown = Template.bind({});
WithEntriesShown.args = {
  ...WithEntriesHidden.args,
  Show: true
}

