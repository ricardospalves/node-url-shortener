import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { ShortURL } from './pages/ShortURL'

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
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
