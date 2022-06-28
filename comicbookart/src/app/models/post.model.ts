import { Image } from './image.model';
import { Artist } from './artist.model';
import { Category } from './category.model';

export class Post {
  id: string;
  title: string;
  caption: string;
  author: string;
  attachment: [Image];
  category: [Category];
  artist: [Artist];
}
