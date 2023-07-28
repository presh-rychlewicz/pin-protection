export type Pin = number[]

export enum FormError {
  INVALID_PIN = 'INVALID_PIN',
  TOO_SHORT = 'TOO_SHORT',
}

export enum View {
  FORM = 'FORM',
  SUCCESS = 'SUCCESS',
}

export type OnSuccess = () => void
