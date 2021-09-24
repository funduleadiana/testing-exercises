import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //testing for initial red button
  const buttonColor = screen.getByRole('button', {name: 'Change to blue'});
  //expect the background color to be red

  expect(buttonColor).toHaveStyle({backgroundColor: 'red'})
  //expecting a click event on the button
  fireEvent.click(buttonColor)
  //after the click event we expect the color to change to blue
  expect(buttonColor).toHaveStyle({backgroundColor: 'blue'});

  //expecting to have the correct text after the color has changed
  expect(buttonColor.textContent).toBe('Change to red');
});
