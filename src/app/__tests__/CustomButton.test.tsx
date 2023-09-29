import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CustomButton } from '../../layouts/components/tests/CustomButton'
import '@testing-library/jest-dom'

test('ボタンをクリックするとON/OFFの表示が切り替わる', async () => {
  render(<CustomButton />)

  const button = screen.getByRole('button')

  expect(button).toHaveTextContent('OFF')
  expect(screen.getByRole('button')).toBeDisabled()
})