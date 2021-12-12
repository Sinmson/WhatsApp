import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UserProfilePreviewComponent } from './user-profile-preview.component';

export default {
  title: 'WhatsApp/UI/UserProfilePreviewComponent',
  component: UserProfilePreviewComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<UserProfilePreviewComponent>;

const Template: Story<UserProfilePreviewComponent> = (args: UserProfilePreviewComponent) => ({
  component: UserProfilePreviewComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}