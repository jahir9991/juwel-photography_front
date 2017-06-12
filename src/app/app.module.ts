import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';


import {NgModule} from '@angular/core';

import {AppComponent} from './core/app.component';
import {ProjectsComponent} from './pages/albums/projects.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {TotopComponent} from './pages/shared/components/totop/totop.component';
import {NavMenuComponent} from './pages/shared/components/nav-menu/nav-menu.component';
import {HomeComponent} from './pages/home/home.component';
import {AlbumCardComponent} from './pages/shared/components/album-card/album-card.component';
import {AlbumService} from "./pages/shared/services/album.service";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProfileComponent,
    TotopComponent,
    NavMenuComponent,
    HomeComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
