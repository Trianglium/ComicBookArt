import { Injectable } from '@angular/core';
import { Image } from '../shared/image';
import { IMAGES } from '../shared/images';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor() { }

  getComics(): Image[] {
    return IMAGES;
  }

  getComic(name: string): Image[] {
    return IMAGES.filter((image) => image.name === name)[0];
  }
}
