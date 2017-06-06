import {Component, OnInit} from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';


declare var event_setup: any;
declare var photopixel_fl_img_height_regulation: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    ngOnInit() {

        photopixel_fl_img_height_regulation();
        event_setup();

    }

    constructor(private router: Router) {
        // this.router.events.subscribe((event: Event) => {
        //     if (event instanceof NavigationEnd) {
        //         if (event.url == '/'){
        //
        //
        //
        //         }
        //     }
        // });
    }

}
