import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {AlbumComponent} from '../album/album.view';
import {UserData} from '../../services/user_data';

@Component({
  selector: 'result'
})

@View({
  templateUrl: './components/result/result.html',
  directives: [CORE_DIRECTIVES, AlbumComponent]
})

export class ResultCmp {
  constructor(public albums: UserData) {
  }
}
