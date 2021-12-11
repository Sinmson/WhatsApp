import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiModule } from "@whatsapp/ui";
import { AppComponent } from './app.component';


// const Template: Story<AppComponent> = (args: AppComponent) => ({
//   component: AppComponent,
//   props: args,
// });


// export const Primary = Template.bind({});
// Primary.args = {
// }

export default {   
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule, UiModule],
    })
  ],
} as Meta<AppComponent>;


export const Primary = () => ({
  props: { 
    label: 'Label' 
  },
});