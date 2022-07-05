import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/image';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  not_found_image = "/assets/images/404/404-oops.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
