import React from 'react';

import {expect} from 'chai';
import sinon from 'sinon';

import Backbone from 'backbone';


import Session from '../../app/scripts/Models/session';


let session;

beforeEach(() => {
    Session.prototype.initialize = () => {

    };
    session = new Session();
});

it('should create a backbone model', () => {
    expect(session).to.be.an.instanceof(Backbone.Model);
});

it('should be a function', () => {
    expect(session).to.be.a('function');
});

it('should have an attribute id of objectId', () => {
    expect(session).to.have.property('idAttribute');
    expect(session.idAttribute).to.equal('objectId');

});

it('should have a default userName value of an empty string', () => {
    expect(session.get('userName')).to.equal('');
});

it('should have a default email value of an empty string', () => {
    expect(session.get('email')).to.equal('');

});
it('should have a default user-token value of an empty string', () => {
    expect(session.get('user-token')).to.equal('');
});

it('should have a default votedArtists value of [] ', () => {
    expect(session.get('votedArtists')).to.equal([]);
    expect(session.get('votedArtists')).to.be.an('array');
});

it('should have a validatePassword method', () => {
    expect(session).to.have.property('validatePassword');
    expect(session.validatePassword).to.be.a.('function');
});

it('should have a register method', () => {
    expect(session).to.have.property('register');
    expect(session.register).to.be.a.('function');
});

it('should have a login method', () => {
    expect(session).to.have.property('login');
    expect(session.login).to.be.a.('function');
});

it('should have a logout method', () => {
expect(session).to.have.property('logout');
expect(session.logout).to.be.a.('function');
});


});
