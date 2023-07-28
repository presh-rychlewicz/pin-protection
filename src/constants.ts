import { FormError } from './types'

export const MIN_PIN_LENGTH = 4
export const MAX_PIN_LENGTH = 7
export const CORRECT_PIN = 123456

export const HEADER_CONTENT: Record<FormError | 'FORM', string> = {
  FORM: 'Enter Your PIN',
  INVALID_PIN: 'Invalid PIN\nTry Again',
  TOO_SHORT: 'PIN is too short',
}
