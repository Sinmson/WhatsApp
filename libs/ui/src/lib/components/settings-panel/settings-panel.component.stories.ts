import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SettingsPanelComponent } from './settings-panel.component';

export default {
  title: 'WhatsApp/UI/Panels/SettingsPanel',
  component: SettingsPanelComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SettingsPanelComponent>;

const Template: Story<SettingsPanelComponent> = (args: SettingsPanelComponent) => ({
  component: SettingsPanelComponent,
  props: args,
});


export const Default = Template.bind({});
Default.args = {
}

export const Filled = Template.bind({});
Filled.args = {
  name: "Tim Pütz",
  info: "I want to be the source of someone's happiness",
  profilePicSrc: "https://i.pravatar.cc/150?u=tim"
}