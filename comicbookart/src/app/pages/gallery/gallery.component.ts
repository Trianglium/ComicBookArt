import { Component, OnInit } from '@angular/core';
import { ComicService } from '../../services/comic.service';
import { Image } from '../../shared/image';
import { IMAGES } from '../../shared/images';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  comics: Image[];
  selectedComic: Image;

  constructor(private comicService: ComicService) { }

  ngOnInit(): void {
    this.comics = this.comicService.getComics();
  }

}
