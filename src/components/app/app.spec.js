import React from 'react';
import App from './app';

it("should contain 'Hello World!'", () => {
    const component = shallow(<App />);
    expect(component.text()).toBe('"Hello World!"');
});