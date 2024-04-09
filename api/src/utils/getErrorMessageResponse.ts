import type { ErrorMessagesResponseKeys } from '../constants/ERROR_MESSAGE_RESPONSE'
import { ERROR_MESSAGES_RESPONSE } from '../constants/ERROR_MESSAGE_RESPONSE'

export const getErrorMessageResponse = (
  errorName: ErrorMessagesResponseKeys,
) => {
  return ERROR_MESSAGES_RESPONSE[errorName]
}
