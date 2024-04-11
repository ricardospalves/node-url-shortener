type ShortURLItem = {
  id: number
  shortURL: string
  originalURL: string
}

type RegisteredShortUrlsLoader = {
  shortURLs: ShortURLItem[]
}
