import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CustomButton } from '@/layouts/components/tests/CustomButton'

test('ボタンをクリックするとON/OFFの表示が切り替わる', async () => {
  render(<CustomButton />)
  
  
  const CustomButton = screen.getByRole('button')

  expect(CustomButton).toHaveTextContent('OFF')
})