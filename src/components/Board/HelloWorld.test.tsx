import { render, screen } from '@testing-library/react'
import Hello from './HelloWorld'

it('Hello World 잘나오니?', () => {
  render(<Hello />)
  expect(screen.queryByText('Hello Wolrd')).toBeInTheDocument()
})
