import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //testing for initial red button
  const buttonColor = screen.getByRole('button', {name: 'Change to blue'});
  //expect the background color to be red
  
  expect(buttonColor).toHaveStyle({backgroundColor: 'red'})
});
