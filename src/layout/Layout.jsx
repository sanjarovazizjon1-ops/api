import Footer from './footer/Footer'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/> 
    </>
  )
}
