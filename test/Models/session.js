import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Backbone from 'backbone';


import Session from '../../app/scripts/Models/session';

describe('Session model', () => {
  let session;

  beforeEach(() => {
    session = new Session();
  });

  it('should create a backbone model', () => {
    expect(session).to.be.an.instanceof(Backbone.Model);
  });

  it('should be a function(because it\'s a constructor)', () =>{
    expect(Session).to.be.a('function');
  });

  it('should have an attribute id of objectId' , () => {
    expect(session).to.have.property('idAttribute');
    expect(session.idAttribute).to.equal('objectId');

  });

  it('should have a default userName value of an empty string', () => {
    expect(session.get('userName')).to.equal('');
  });

  it('should have a default email value of an empty string', () => {
    expect(session.get('email')).to.equal('');

  });
  it('should have a default password value of an empty string', () => {
    expect(session.get('password')).to.equal('');
  });
});
