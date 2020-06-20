import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Test CounterApp component', () => {
  // se inicializa para no perder la referencia a los métodos
  // del tipo del wrapper dentro de las funciones
  // let wrapper; //undefined
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('Should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show default 100', () => {
    const value = 100;
    const wrapper = shallow(
      <CounterApp
        value={value}
      />
    );

    const counterText = wrapper.find('h2').text();

    expect(Number(counterText)).toBe(value);
  });

  test('Should increase +1', () => {
    //console.log(wrapper.find('button').at(2).html());
    wrapper.find('button').at(2).simulate('click');

    const counterText = wrapper.find('h2').text();

    expect(counterText).toBe('1');
  });

  test('Should decrease -1', () => {
    //console.log(wrapper.find('button').at(0).html());
    wrapper.find('button').at(0).simulate('click');

    const counterText = wrapper.find('h2').text();

    expect(counterText).toBe('-1');
  });

  test('Should reset value', () => {
    const value = 100;
    const wrapper = shallow(
      <CounterApp
        value={value}
      />
    );

    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(1).simulate('click');

    const counterText = wrapper.find('h2').text();

    expect(counterText).toBe('100');
  });
});

