import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./data-table/DataTable', () => () => 'DataTable');

test('renders component', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
