import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/image';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  not_found_image = "/assets/images/404/blue-stars-404.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
