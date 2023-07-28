import CircleIcon from '@mui/icons-material/Circle'
import { Stack, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { Pin } from '../../../types'

interface Props {
  isError: boolean
  pin: Pin
}

const PinDisplay: FC<Props> = ({ isError, pin }) => {
  const { palette } = useTheme()

  return (
    <Stack
      width="250px"
      height="50px"
      direction="row"
      alignItems="center"
      justifyContent="center"
      borderRadius={2}
      border={isError ? '3px solid' : '1px solid'}
      borderColor={isError ? palette.error.dark : palette.info.light}
      sx={{
        backgroundColor: isError ? palette.error.light : undefined,
      }}
    >
      {pin.map((digit, index, aray) => {
        const isLastDigit = index === aray.length - 1
        const digitColor = isError ? palette.error.dark : undefined

        return (
          <Stack
            alignItems="center"
            justifyContent="center"
            height="30px"
            width="30px"
            key={index}
          >
            {isLastDigit ? (
              <Typography
                color={digitColor}
                sx={{
                  pointerEvents: 'none',
                }}
              >
                {digit}
              </Typography>
            ) : (
              <CircleIcon htmlColor={digitColor} />
            )}
          </Stack>
        )
      })}
    </Stack>
  )
}

export default PinDisplay
