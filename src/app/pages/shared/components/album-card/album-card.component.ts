import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../models/album";

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  // styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  @Input() 'a_card': Album
  public album: Album;

  constructor() {
  }

  ngOnInit() {
    this.album = this.a_card;

  }

}
