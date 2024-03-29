import { Header } from '@/components/Header'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow p-4">
        <Outlet />
      </main>
    </div>
  )
}
