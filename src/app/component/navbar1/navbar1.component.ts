import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

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
    return ['navbar', `${this.color}-navbar`];
  }
}
