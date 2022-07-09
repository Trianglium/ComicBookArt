import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// https://www.npmjs.com/package/ngx-masonry
import { NgxMasonryModule } from 'ngx-masonry';
// https://ng-bootstrap.github.io/#/home
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MasonryComponent } from './components/masonry/masonry.component';
import { HeaderComponent } from './components/header/header.component';
import { ComicstripComponent } from './components/comicstrip/comicstrip.component';
import { ComicService } from './services/comic.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotfoundComponent,
    HomeComponent,
    GalleryComponent,
    CarouselComponent,
    MasonryComponent,
    HeaderComponent,
    ComicstripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMasonryModule,
    NgbModule
  ],
  providers: [ComicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
