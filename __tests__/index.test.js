import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import IndexPage from '../pages';

it('renders correctly', () => {
  const tree = renderer.create(
    <IndexPage/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});