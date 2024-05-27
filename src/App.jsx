import { Outlet } from 'react-router-dom'
import './App.css'
import LinksBar from './Components/LinksBar/LinksBar'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { LoginModalContext } from './Context/modalContext'
import LoginModal from './Components/LoginModal/LoginModal'
import { MessageContext } from './Context/MessagesContext'

function App() {

  return (
    <>
      <MessageContext>
        <LoginModalContext>
          <LinksBar />
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
          <LoginModal />
        </LoginModalContext>
      </MessageContext>
    </>
  )
}

export default App
