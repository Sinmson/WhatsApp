import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PartnerProfilePreviewComponent } from './partner-profile-preview.component';

export default {
  title: 'WhatsApp/UI/Components/PartnerProfilePreviewComponent',
  component: PartnerProfilePreviewComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })    
  ],
  argTypes: {
    lastOnline: {
      defaultValue: null,
      description: "Last online date of user or null",
      control: {
        type: "date"
      },
    }
  }
} as Meta<PartnerProfilePreviewComponent>;

const Template: Story<PartnerProfilePreviewComponent> = (args: PartnerProfilePreviewComponent) => ({
  component: PartnerProfilePreviewComponent,
  props: {
    ...args,
    lastOnline: args.lastOnline ? new Date(args.lastOnline) : null
  },
});


export const Default = Template.bind({});
Default.args = {
}

export const WithProfile = Template.bind({});
WithProfile.args = {
  ...Default.args,
  lastOnline: null,
  openChat: { id: 0 },
  name: "Maria Musterfrau",
  isOnline: false,
  profilePicSrc: "https://i.pravatar.cc/40?u=MariaMusterfrau"
}

export const WithProfileOnline = Template.bind({});
WithProfileOnline.args = {
  ...WithProfile.args,
  lastOnline: new Date(),
  isOnline: true
}

export const WithProfileOfflineLong = Template.bind({});
WithProfileOfflineLong.args = {
  ...WithProfile.args,
  lastOnline: new Date(2000, 10, 23, 13, 37, 420),
  isOnline: false
}

export const WithProfileOfflineYesterday = Template.bind({});
WithProfileOfflineYesterday.args = {
  ...WithProfile.args,
  lastOnline: new Date(new Date().setDate(new Date().getDate()-1)),
  isOnline: false
}

export const WithProfileOfflineToday = Template.bind({});
WithProfileOfflineToday.args = {
  ...WithProfile.args,
  lastOnline: new Date(new Date().setHours(new Date().getHours()-1)),
  isOnline: false
}