import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { RatingstarComponent } from '../ratingstar.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { color } from '@storybook/addon-knobs';
import { number } from '@storybook/addon-knobs';
// This exports the Stories group for this component




const label = 'rating';
const defaultValue = 5;
const options = {
    range: true,
    min: 0,
    max: 5,
    step: 1,
  };
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/ratingstar',
  
  // The component related to the Stories
  component: RatingstarComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [RatingstarComponent],
      imports: [CommonModule],
    }),
    withKnobs,
  ],
};
// This creates a Story for the component
const Template: Story<RatingstarComponent> = () => ({
  component: RatingstarComponent,
  props: {
    
    // we use the select knob to set the color value
    color: select('Color', ['primary', 'secondary'] , 'primary'),
    content: text('Text', 'WissalTech'),
    rating: number(label, defaultValue, options),
    target: '_blank',
  },
  template: `<app-ratingstar
  [rating]="rating"
  [color]="color"
  ></app-ratingstar>`,
});
export const Base = Template.bind({});
// Other stories could be added here as well, all you have to do is export them along!