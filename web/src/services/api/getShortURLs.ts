import { AxiosPromise } from 'axios'
import { api } from './api'

type ShortURL = {
  id: number
  shortURL: string
  originalURL: string
}

export type GetShortURLsServiceReturnData = ShortURL[]

export const getShortURLs = (): AxiosPromise<GetShortURLsServiceReturnData> => {
  return api.get('/short-url')
}
