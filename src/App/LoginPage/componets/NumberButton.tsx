import Button from '@mui/material/Button'
import { FC } from 'react'

interface Props {
  value: number
  onClick: () => void
  disabled: boolean
}

const NumberButton: FC<Props> = ({ disabled, onClick, value }) => (
  <Button
    color="info"
    onFocus={({ target }) => target.blur()}
    disabled={disabled}
    onClick={onClick}
    variant="outlined"
  >
    {value}
  </Button>
)

export default NumberButton
