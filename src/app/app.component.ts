import { Component } from '@angular/core';
import { faStar } from "@fortawesome/free-regular-svg-icons";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storybook';
    faStar = faStar;
}
