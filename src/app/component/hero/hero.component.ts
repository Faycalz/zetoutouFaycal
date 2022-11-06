import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  color: 'primary' | 'secondary' = 'primary';
  @Input()
  href!: string;
  @Input()
  target?: '_self' | '_blank' | '_parent' | '_top' = '_self';
  
  public get classes(): Array<string> {
    return ['hero', `${this.color}-header`];
  }

}
