import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';


import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProjectsComponent} from './page/projects/projects.component';
import {ProfileComponent} from './page/profile/profile.component';
import {TotopComponent} from './components/totop/totop.component';
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
import {HomeComponent} from './page/home/home.component';

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
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
