import {expect} from 'chai';
import {shallow} from 'enzyme';

import React from 'react';

import {spyOnComponentMethod} from 'sinon-spy-react';
import App from '../../app/scripts/Components/Containers/App';


describe('App component', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App/>);

  });

  it('should be a div element', () => {
    expect(app).to.have.tagName('div');
  });

  it('should have an array as it\'s session state', () => {
    expect(app).to.have.state('session').be.an('object');
  });

  // it('should have a text element', () => {
  //   expect(app).to.have.tagName('h1');
  // });
  //
  // it('should have a login component', () => {
  //   expect(app).to.have.shallow(tagName('h1'));
  // });
})
