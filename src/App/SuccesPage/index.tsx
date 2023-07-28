import { CheckCircle } from '@mui/icons-material'
import { PageContainer, PageTitle } from '../../components'

const SuccessPage = () => (
  <PageContainer>
    <PageTitle>Welcome</PageTitle>

    <CheckCircle
      sx={{
        fontSize: 200,
      }}
      color="success"
    />
  </PageContainer>
)

export default SuccessPage
