import { Stack, Typography } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

const PageTitle: FC<Props> = ({ children }) => (
  <Stack justifyContent="center" height="100px">
    <Typography
      textAlign="center"
      variant="h4"
      sx={{
        whiteSpace: 'pre-line',
      }}
    >
      {children}
    </Typography>
  </Stack>
)

export default PageTitle
