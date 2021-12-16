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
  profilePicSrc: "https://pps.whatsapp.net/v/t61.24694-24/238794742_298975888658744_1345646294642423032_n.jpg?ccb=11-4&oh=31055f9f73e25ec1f40296b7107e3bab&oe=61BF5060"
}