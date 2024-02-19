import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render basic crude operation',()=>{
  render(<App/>);
  const titleText = screen.getByText(/Basic crud operation/i)
  expect(titleText).toBeInTheDocument();
})