import Session from './Models/session';
import SearchArtists from './Collections/SearchArtists';
import Votes from './Collections/Votes';

export default {
  session: new Session(),
  artists: new SearchArtists(),
  voted: new Votes()
};
