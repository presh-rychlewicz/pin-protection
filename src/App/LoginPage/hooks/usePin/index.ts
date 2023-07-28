import { useState, useEffect } from 'react'
import { MAX_PIN_LENGTH } from '../../../../constants'
import { Pin, FormError, OnSuccess } from '../../../../types'
import { validatePIN } from './utils'

const usePin = (onSuccess: OnSuccess) => {
  const [pin, setPin] = useState<Pin>(PIN_INITIAL_STATE)
  const [formError, setFormError] = useState<FormError | undefined>(
    FORM_ERROR_INITIAL_STATE
  )

  useEffect(() => {
    const handleEvent = ({ key }: KeyboardEvent) => {
      const isEnterKey = key === 'Enter'

      if (isEnterKey) {
        validatePIN(pin, setFormError, onSuccess)
      }
    }

    document.addEventListener('keydown', handleEvent)

    return () => document.removeEventListener('keydown', handleEvent)
  }, [pin, onSuccess])

  const pinOnChange = (digit: Pin[number]) => {
    if (formError) {
      setFormError(FORM_ERROR_INITIAL_STATE)
      setPin(PIN_INITIAL_STATE)
    }

    setPin((prev) => [...prev, digit])
  }

  return {
    formError,
    isError: !!formError,
    pin,
    pinOnChange,
    shouldDisableKeys: pin.length === MAX_PIN_LENGTH,
  }
}

export const PIN_INITIAL_STATE: Pin = []
export const FORM_ERROR_INITIAL_STATE = undefined

export default usePin
