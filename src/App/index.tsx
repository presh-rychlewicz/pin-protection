import { useState } from 'react'
import LoginPage from './LoginPage'
import { View } from '../types'
import SuccessPage from './SuccesPage'

const App = () => {
  const [view, setView] = useState<View>(View.FORM)

  switch (view) {
    case View.FORM:
      return <LoginPage onSuccess={() => setView(View.SUCCESS)} />

    case View.SUCCESS:
      return <SuccessPage />
  }
}

export default App
