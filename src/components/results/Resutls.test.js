import expect from 'expect';
import React from 'react';
import Results from './Results';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow , mount } from 'enzyme';
import data from '../../assets/data/restaurants';

configure({ adapter: new Adapter() });


describe('Results page', () => {

   it('Check props data for the results', () => {
    const wrapper = mount(<Results restaurants={data.restaurants} />);
    expect(wrapper.props().restaurants).toEqual(data.restaurants);
  });

  it('number restaurant on json file ', () => {
    const wrapper = mount(<Results  restaurants={data.restaurants}/>);
    expect(wrapper.find('h2 span').html()).toEqual("<span>47</span>");
  });

});
