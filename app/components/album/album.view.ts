import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'album',
  inputs: ['album']
})

@View({
  templateUrl: 'components/album/album.html'
})

export class AlbumComponent {}
