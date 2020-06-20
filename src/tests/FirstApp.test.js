import React from 'react';
//import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import FirstApp from '../FirstApp';

describe('Tests FirstApp component', () => {

  //add to setupTest.js
  //import '@testing-library/jest-dom/extend-expect';
  //test('Should return "Hello, I am Goku!!!" message', () => {
  //  const greeting = 'Hello, I am Goku!!!';
  //  //const wrapper = render(<FirstApp greet={greeting} />);
  //  const { getByText } = render(<FirstApp greet={greeting} />);

  //  //expect(wrapper.getByText(greeting)).toBeInTheDocument();
  //  expect(getByText(greeting)).toBeInTheDocument();
  //});

  test('Should display correctly', () => {
    const greeting = 'Hello, I am Goku!!!';
    const wrapper = shallow(<FirstApp greet={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Should show a subtitle send by props', () => {
    const greeting = 'Hello, I am Goku!!!';
    const subtitle = 'I am a subtitle';
    const wrapper = shallow(
      <FirstApp
        greet={greeting}
        subtitle={subtitle}
      />
    );

    //parecido al document.querySelector('p');
    const textP = wrapper.find('p').text();

    expect(textP).toBe(subtitle);
  });
});

