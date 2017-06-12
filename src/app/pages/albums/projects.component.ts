import {Component, HostBinding, OnInit} from '@angular/core';
import {Album} from "../shared/models/album";
import {AlbumService} from "../shared/services/album.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  // @HostBinding('class') classes = 'wow zoomIn';
  album_cards=[];

  constructor(private  _albumService: AlbumService) {

  }


  ngOnInit() {
    this._albumService.getAlbums()
      .subscribe((response) => {
        this.album_cards = response;
      });
  }

}
