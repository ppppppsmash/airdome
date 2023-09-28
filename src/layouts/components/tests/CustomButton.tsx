import { useState } from 'react'

export const CustomButton = () => {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState((prev) => !prev)
  }

  return (
    <button onClick={handleClick}>
      {state ? 'ON' : 'OFF'}
    </button>
  )
}