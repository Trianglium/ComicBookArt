import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo_svg = "/assets/images/site/logo_color_outlined64.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
