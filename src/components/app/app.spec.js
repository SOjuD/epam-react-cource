import React from 'react';
import App from './app';

it("should contain 'Hello World!'", () => {
    const component = shallow(<App />);
    const wrapper = component.find('.container');
    expect(wrapper.text).toBe('Hello World!');
});
