import { Component, EventEmitter, Input, OnChanges, OnInit , Output} from '@angular/core';
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-ratingstar',
  templateUrl: './ratingstar.component.html',
  styleUrls: ['./ratingstar.component.css']
})
export class RatingstarComponent implements OnInit {

  constructor() { }
  faStar = faStar;
  faCoffee = faCoffee;

  @Input() rating! : number;
  @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  color: 'primary' | 'secondary' = 'primary';
  @Input()
  href!: string;
  @Input()
  target?: '_self' | '_blank' | '_parent' | '_top' = '_self';
  cropwidth : number = 75;
  ngOnInit(): void {
    this.cropwidth = this.rating*90/5;
    // console.log( `rating is ${this.rating}` );
  }
  onClick(){
    this.ratingClicked.emit( `rating is ${this.rating}` );
  }
  public get classes(): Array<string> {
    return ['star', `${this.color}-star`];
  }


}
