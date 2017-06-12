import {Component, Host, HostBinding, Input, OnInit} from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';


declare var event_setup: any;
declare var photopixel_fl_img_height_regulation: any;
declare var photopixel_fl_next_slide_button: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  ngOnInit() {

    photopixel_fl_img_height_regulation();
    photopixel_fl_next_slide_button();
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
