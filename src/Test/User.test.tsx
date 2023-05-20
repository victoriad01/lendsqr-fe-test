import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import Users from '../Pages/Users/Users'

describe('Login', () => {
  // Test 1
  it("render User's page", () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    )
    expect(screen.getByTestId('users')).toBeInTheDocument()
    expect(screen.getByTestId('table')).toBeInTheDocument()
  })

  it('should render card components', () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    )
    expect(screen.getByTestId('cards')).toBeInTheDocument()
    expect(screen.getByTestId('table')).toBeInTheDocument()
  })

  it('should render table components', () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    )
    expect(screen.getByTestId('table')).toBeInTheDocument()
  })
})
