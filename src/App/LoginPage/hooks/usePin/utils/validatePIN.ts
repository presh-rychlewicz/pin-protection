import { CORRECT_PIN, MIN_PIN_LENGTH } from '../../../../../constants'
import { FormError, Pin } from '../../../../../types'

const validatePin = (
  pin: Pin,
  errorSetter: (value: FormError) => void,
  onSuccess: () => void
) => {
  const pinAsNumber = parseInt(pin.join(''))

  const isCorrect = pinAsNumber === CORRECT_PIN
  if (isCorrect) {
    onSuccess()
    return 'SUCCESS'
  }

  const isTooShort = pin.length < MIN_PIN_LENGTH
  if (isTooShort) {
    errorSetter(FormError.TOO_SHORT)
    return
  }

  const isIncorrect = !isCorrect
  if (isIncorrect) {
    errorSetter(FormError.INVALID_PIN)
    return
  }
}

export default validatePin
