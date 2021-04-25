// import Enzyme, { shallow, render, mount } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import toJson from 'enzyme-to-json';
import "@babel/polyfill";
import '@testing-library/jest-dom';
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

// // React 17 Enzyme adapter
// Enzyme.configure({ adapter: new Adapter() });

// global.shallow = shallow;
// global.render = render;
// global.mount = mount;
// global.toJson = toJson;

// Fail tests on any warning
console.error = message => {
    throw new Error(message);
};
