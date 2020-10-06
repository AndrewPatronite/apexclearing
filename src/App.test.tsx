import React from 'react';
import { shallow } from 'enzyme';
import * as ReactRedux from 'react-redux';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    spyOn(ReactRedux, 'useDispatch');
    spyOn(ReactRedux, 'useSelector');
  });

  it('is a div with the expected className', () => {
    const subject = shallow(<App />);
    expect(subject.type()).toEqual('div');
    expect(subject.prop('className')).toEqual('App');
  });
});
