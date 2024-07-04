import { render, screen } from '@testing-library/react'
import DialogParts from '../../layouts/components/Dialog'
import '@testing-library/jest-dom'

describe('dialog', () => {
  it('renders a dialog', () => {
    render(<DialogParts />)

    const button = screen.getByRole('button', {
      name: /气膜资料请求/i,
    })
    expect(button).toBeInTheDocument()
    // expect(screen.getByRole("button")).toBeTruthy()
    // expect(screen.getByText("气膜资料请求")).toBeTruthy()
  })
})