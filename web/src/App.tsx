import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
