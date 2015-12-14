import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Album} from '../album/album';
import {AlbumComponent} from '../album/album.view';

@Component({
  selector: 'result'
})

@View({
  templateUrl: './components/result/result.html',
  directives: [CORE_DIRECTIVES, AlbumComponent]
})

export class ResultCmp {
    albums = [
      new Album('Artist 1', 'Album 1'),
      new Album('Artist 2', 'Album 2')
    ];
}

