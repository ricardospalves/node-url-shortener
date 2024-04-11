import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { ShortURL } from './pages/ShortURL'
import { RegisteredShortUrls } from './pages/RegisteredShortUrls'
import { registeredShortUrlsLoaderFunction } from './pages/RegisteredShortUrls/loader'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/short-url',
        element: <ShortURL />,
      },
      {
        loader: registeredShortUrlsLoaderFunction,
        path: '/registered-short-urls',
        element: <RegisteredShortUrls />,
      },
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
