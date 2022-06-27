import { Image } from './image.model';
import { Category } from './category.model';

export class Post {
  id: string;
  title: string;
  caption: string;
  author: string;
  attachment: [Image];
  category: [Category];
}
