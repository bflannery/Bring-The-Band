import React from 'react';
import Session from './Models/session';
import Artists from './Collections/Artists'

export default {
  session: new Session(),
  artists: new Artists()
};
