import { Stack } from '@mui/material'
import { FC } from 'react'
import { PageContainer, PageTitle } from '../../components'
import { HEADER_CONTENT } from '../../constants'
import { OnSuccess } from '../../types'
import { NumberButton, PinDisplay } from './componets'
import { usePin } from './hooks'
import getKeys from './utils/getKeys'

interface Props {
  onSuccess: OnSuccess
}

const LoginPage: FC<Props> = ({ onSuccess }) => {
  const keys = getKeys()
  const { formError, isError, pin, pinOnChange, shouldDisableKeys } =
    usePin(onSuccess)

  return (
    <PageContainer>
      <PageTitle>{HEADER_CONTENT[formError ? formError : 'FORM']}</PageTitle>

      <PinDisplay isError={isError} pin={pin} />

      <Stack spacing={1}>
        {keys.map((rowButtons, index, aray) => {
          const isLastRow = index === aray.length - 1

          return (
            <Stack
              key={rowButtons.join('')}
              spacing={1}
              direction="row"
              justifyContent={isLastRow ? 'center' : undefined}
            >
              {rowButtons.map((value) => (
                <NumberButton
                  key={value}
                  disabled={!formError && shouldDisableKeys}
                  onClick={() => pinOnChange(value)}
                  value={value}
                />
              ))}
            </Stack>
          )
        })}
      </Stack>
    </PageContainer>
  )
}

export default LoginPage
