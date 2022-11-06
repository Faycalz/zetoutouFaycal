import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { HeroComponent } from '../hero.component';
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
  title: 'Components/hero',
  
  // The component related to the Stories
  component: HeroComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [HeroComponent],
      imports: [CommonModule],
    }),
    withKnobs,
  ],
};
// This creates a Story for the component
const Template: Story<HeroComponent> = () => ({
  component: HeroComponent,
  props: {
    



    
    // we use the select knob to set the color value
    color: select('Color', ['primary', 'secondary'] , 'primary'),
    content: text('Text', 'WissalTech'),
    discription : text('Discription' , 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi.'),
    href: 'https://storybook.js.org/',
    target: '_blank',
  },
  template: `<app-hero [color]="color"
  [href]="href"
  [target]="target">{{ content }}</app-hero>`,
});
export const Base = Template.bind({});
// Other stories could be added here as well, all you have to do is export them along!