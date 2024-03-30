import { AxiosPromise } from 'axios'
import { api } from './api'

export type CreateShortURLServiceReturnData = {
  id: string
  shortUrl: string
}

export type CreateShortURLServiceArguments = {
  url: string
}

export const createShortURLService = ({
  url,
}: CreateShortURLServiceArguments): AxiosPromise<CreateShortURLServiceReturnData> => {
  return api.post('/short-url', {
    url,
  })
}
