import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Navbar1Component } from '../navbar1.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { color } from '@storybook/addon-knobs';
// This exports the Stories group for this component
const label = 'Color';
const defaultValue = '#ff00ff';
const groupId = 'GROUP-ID1';
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/navbar1',
  
  // The component related to the Stories
  component: Navbar1Component,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [Navbar1Component],
      imports: [CommonModule],
    }),
    withKnobs,
  ],
};
// This creates a Story for the component
const Template: Story<Navbar1Component> = () => ({
  component: Navbar1Component,
  props: {
    



    
    // we use the select knob to set the color value
    color: select('Color', ['primary', 'secondary'] , 'primary'),
    content: text('Text', 'WissalTech'),
    href: 'https://storybook.js.org/',
    target: '_blank',
  },
  template: `<app-navbar1 [color]="color"
  [href]="href"
  [target]="target">{{ content }}</app-navbar1>`,
});
export const Base = Template.bind({});
// Other stories could be added here as well, all you have to do is export them along!