import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
