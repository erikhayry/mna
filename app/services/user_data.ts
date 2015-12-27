import {Album} from '../components/album/album';

export class UserData {
  albums = [
    new Album('Artist 1', 'Album 1'),
    new Album('Artist 2', 'Album 2'),
    new Album('Artist 3', 'Album 3'),
    new Album('Artist 4', 'Album 4')
  ];

  get(): Album[] {
    return this.albums;
  }
}
