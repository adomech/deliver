import expect from 'expect';
import React from 'react';
import LocationBar from './LocationBar';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow , mount } from 'enzyme';
import data from '../../assets/data/restaurants';

configure({ adapter: new Adapter() });

describe('Location Bar test', () => {

  it('contains 1 Div with class elements ', () => {
    const wrapper = shallow(<LocationBar />);
    expect(wrapper.find('div.elements').length).toBe(1);
  });

   it('check name of the neighborhood = Fitzrovia ', () => {
    const wrapper = mount(<LocationBar  name={data.neighborhood}/>);
    expect(wrapper.find('h1').text()).toEqual("Fitzrovia");
  });

});
