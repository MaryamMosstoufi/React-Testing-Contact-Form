import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';



test('Contact form adds new message to data', async() => {
  render(<ContactForm />);
  //const { findByText } = render(<ContactForm />);
  // type into each input and textarea
  //1. query for all inputs and textarea
  const firstNameInput = screen.getByLabelText(/First Name*/i);
  const lastNameInput = screen.getByLabelText(/Last Name*/i);
  const emailInput = screen.getByLabelText(/Email*/i);
  const messageTextarea = screen.getByLabelText(/Message/i);
  //2. add the change event to add text
  fireEvent.change(firstNameInput, { target: { value: 'Maryam' } });
  fireEvent.change(lastNameInput, { target: { value: 'Mosstoufi' } });
  fireEvent.change(emailInput, { target: { value: 'maryam@maryam.com' } });
  fireEvent.change(messageTextarea, { target: { value: 'Hello World!' } });

  // click submit button
  //1. query for the button
  const submitButton = screen.getByRole('button');
  //2. run the click even on the button
  fireEvent.click(submitButton);

  // assert that submitted form is in data
  //1. query for the new message data
  // const newFirstName = screen.findByText(/maryam/i);
  // console.log(newFirstName);
  // const newLastName = screen.findByText(/mosstoufi/i);
  // const newEmail = screen.findByText(/maryam@maryam.com/i);
  // const newMessage = screen.findByText(/hello world!/i);
  //2. assert that it is being added to data
  //expect(newFirstName).toBeInTheDocument();

  const result = await screen.findByTestId('result');
  expect(result).toBeInTheDocument();
  console.log(result);
  
})