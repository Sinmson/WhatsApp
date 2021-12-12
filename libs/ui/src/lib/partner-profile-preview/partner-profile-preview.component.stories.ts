import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PartnerProfilePreviewComponent } from './partner-profile-preview.component';

export default {
  title: 'WhatsApp/UI/PartnerProfilePreviewComponent',
  component: PartnerProfilePreviewComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PartnerProfilePreviewComponent>;

const Template: Story<PartnerProfilePreviewComponent> = (args: PartnerProfilePreviewComponent) => ({
  component: PartnerProfilePreviewComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}