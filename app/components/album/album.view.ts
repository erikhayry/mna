import {Component, View} from 'angular2/angular2';
import {Album} from '../album/album';

@Component({
  selector: 'album',
  inputs: ['album']
})

@View({
  template: `
    <div>
      <p>{{album.artist}}</p>
      <p>{{album.name}}</p>
    </div>
  `
})

export class AlbumComponent {}

