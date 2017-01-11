import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import artist from '../../app/scripts/models/artist';

describe('artist model', () => {
  let artist;

  beforeEach(() => {
    artist = new artist();
  });

  it('should create a Backbone Model', () => {
      expect(artist).to.be.an.instanceof(Backbone.Model);
  });

  it('should be a function (because it\'s a constructor)', () => {
      expect(artist).to.be.a('function');
  });

  it('should have an idAttribute of id', () => {
      expect(artist).to.have.property('idAttribute');
      expect(artist.idAttribute).to.equal('id');
  });

});
