import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', ()=> {
  render(<App/>)
  //button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();
  //check that the checkbox starts out unchecked
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('check the checkbox and disable button', ()=> {
  render(<App/>)
  const checkBox = screen.getByRole('checkbox');
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  //Adding the click event fot the checked checkbox
  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  //unchecking the checkBox to enable button again
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
})

