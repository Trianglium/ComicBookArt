import { Component, OnInit } from '@angular/core';
import { IMAGES } from '.../shared/images';
import { Image } from '.../models/image.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: IMAGES;

  constructor() { }

  ngOnInit(): void {
  }

}
