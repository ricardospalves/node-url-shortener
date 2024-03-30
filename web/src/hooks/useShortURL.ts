import { create } from 'zustand'

type ShortURL = string

export type UseShortURLStoreData = {
  shortURL: ShortURL
  setShortURL: (shortURL: ShortURL) => void
}

export const useShortURLStore = create<UseShortURLStoreData>((set) => {
  return {
    shortURL: '',
    setShortURL(shortURL) {
      return set({
        shortURL,
      })
    },
  }
})
