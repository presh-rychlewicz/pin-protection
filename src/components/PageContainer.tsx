import { Stack } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

const PageContainer: FC<Props> = ({ children }) => (
  <Stack paddingY="100px" alignItems="center" spacing={5}>
    {children}
  </Stack>
)

export default PageContainer
