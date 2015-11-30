import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Album} from '../album/album';

@Component({
  selector: 'result',
  templateUrl: './components/result/result.html',
  directives: [CORE_DIRECTIVES]
})

export class ResultCmp {
    albums = [
      new Album('Artist 1', 'Album 1'),
      new Album('Artist 2', 'Album 2')
    ];
}

