export type ErrorMessage = {
  id: string
  statusCode: number
  message: string
  error: true
}

export type ErrorMessagesResponseKeys = 'invalidFields' | 'internalServerError'

export const ERROR_MESSAGES_RESPONSE: Record<
  ErrorMessagesResponseKeys,
  ErrorMessage
> = {
  invalidFields: {
    id: 'invalidFields',
    error: true,
    message: 'There are invalid fields.',
    statusCode: 422,
  },
  internalServerError: {
    id: 'internalServerError',
    error: true,
    message: 'Internal server error.',
    statusCode: 500,
  },
} as const
