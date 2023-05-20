import { describe, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Login from '../Pages/Login/Login'

import { MemoryRouter } from 'react-router-dom'

describe('Login', () => {
  // Test 1
  it('render welcome', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    expect(screen.getByText('Welcome!')).toBeInTheDocument()
    expect(screen.getByTestId('enter-details')).toBeInTheDocument()
  })

  // Test 2
  test('email input should be rendered', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    const emailInputElement = screen.getByPlaceholderText(/email/i)
    expect(emailInputElement).toBeInTheDocument()
  })

  // Test 3
  test('password input should be rendered', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    const emailInputElement = screen.getByPlaceholderText(/password/i)
    expect(emailInputElement).toBeInTheDocument()
  })

  // Test 4
  test('button should be rendered', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  // Test 5
  test('email input should be empty', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    const emailInputElement = screen.getByPlaceholderText(
      /email/i
    ) as HTMLInputElement
    expect(emailInputElement.value).toBe('')
  })

  // Test 6
  test('password input should be empty', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    const passwordInputElement = screen.getByPlaceholderText(
      /password/i
    ) as HTMLInputElement
    expect(passwordInputElement.value).toBe('')
  })

  // Test 7a Error message should not show on page render
  test('error message should not render', () => {
    const { queryByTestId } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )

    const errorMessage = queryByTestId('error')
    expect(errorMessage).toBeNull()
  })

  // Test 7b Error message should show on page render
  // test('error message should render', () => {
  //   const { queryByTestId } = render(
  //     <MemoryRouter>
  //       <Login />
  //     </MemoryRouter>
  //   )
  //   // Find the input field or button that triggers the error
  //   const triggerElement = screen.getByRole('button', { name: 'LOG IN' })
  //   // Trigger an event or condition that sets the state to true
  //   fireEvent.click(triggerElement)
  //   // Check if the error message is rendered
  //   const errorMessageShow = queryByTestId('error')

  //   expect(errorMessageShow).toBeInTheDocument()
  // })

  // Test 8
  test('email input should change', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    const emailInputElement = screen.getByPlaceholderText(
      /email/i
    ) as HTMLInputElement

    // Stimulate a value
    const testValue = 'test@gmail.com'
    fireEvent.change(emailInputElement, { target: { value: testValue } })
    expect(emailInputElement.value).toBe(testValue)
  })

  // Test 9
  test('password input should change', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    const passwordInputElement = screen.getByPlaceholderText(
      /password/i
    ) as HTMLInputElement
    // Stimulate a value
    const testValue = 'test'
    fireEvent.change(passwordInputElement, { target: { value: testValue } })
    expect(passwordInputElement.value).toBe(testValue)
  })

  // Test 10 Button should not be disabled if input is filled
  test('button should be  not be disabled if inputs are filled', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    const buttonElement = screen.getByRole('button')

    const emailInputElement = screen.getByPlaceholderText(/email/i)
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    // Stimulate a value
    const testValue = 'test'
    fireEvent.change(emailInputElement, { target: { value: testValue } })
    fireEvent.change(passwordInputElement, { target: { value: testValue } })
    expect(buttonElement).not.toBeDisabled()
  })
})
