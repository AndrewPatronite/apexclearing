import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('is a div with the expected className', () => {
    const subject = shallow(<App />);
    expect(subject.type()).toEqual('div');
    expect(subject.prop('className')).toEqual('App');
  });
});
