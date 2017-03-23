import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TripsPage from '../pages/trips';

it('renders correctly', () => {
  const tree = renderer.create(
    <TripsPage/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});