import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/image';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss']
})
export class MasonryComponent implements OnInit {
  images: Image[] = [
    {image_path: '/assets/images/comics/0.png'},
    {image_path: '/assets/images/comics/1.png'},
    {image_path: '/assets/images/comics/2.png'},
    {image_path: '/assets/images/comics/3.png'},
    {image_path: '/assets/images/comics/4.png'},
    {image_path: '/assets/images/comics/5.png'},
    {image_path: '/assets/images/comics/6.png'},
    {image_path: '/assets/images/comics/7.png'},
    {image_path: '/assets/images/comics/8.png'},
    {image_path: '/assets/images/comics/9.png'},
    {image_path: '/assets/images/comics/10.png'},
    {image_path: '/assets/images/comics/11.png'},
    {image_path: '/assets/images/comics/12.png'},
    {image_path: '/assets/images/comics/13.png'},
    {image_path: '/assets/images/comics/14.png'},
    {image_path: '/assets/images/comics/15.png'},
    {image_path: '/assets/images/comics/16.png'},
    {image_path: '/assets/images/comics/17.png'},
    {image_path: '/assets/images/comics/18.png'},
    {image_path: '/assets/images/comics/19.png'},
    {image_path: '/assets/images/comics/20.png'},
    {image_path: '/assets/images/comics/21.png'},
    {image_path: '/assets/images/comics/22.png'},
    {image_path: '/assets/images/comics/23.png'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
