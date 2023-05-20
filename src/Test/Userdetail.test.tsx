import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import Userdetails from '../Pages/UserDetails/Userdetails'

describe('Login', () => {
  // Test 1
  it("render User's page", () => {
    render(
      <MemoryRouter>
        <Userdetails />
      </MemoryRouter>
    )
    expect(screen.getByTestId('load-details')).toBeInTheDocument()
  })

  // Test 2
  it('render back button', () => {
    render(
      <MemoryRouter>
        <Userdetails />
      </MemoryRouter>
    )
    expect(screen.getByTestId('back-cp')).toBeInTheDocument()
  })

  // Test 3
  it('render card components button', () => {
    render(
      <MemoryRouter>
        <Userdetails />
      </MemoryRouter>
    )
    expect(screen.getByTestId('card-cp')).toBeInTheDocument()
  })

  // Test 4
  it('render card components button', () => {
    render(
      <MemoryRouter>
        <Userdetails />
      </MemoryRouter>
    )
    expect(screen.getByTestId('general')).toBeInTheDocument()
  })
})
