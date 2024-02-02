import '../../App.css'
import { useState } from 'react'
import { SideBar } from '../components/SideBar/SideBar'
import { MainSection } from '../components/MainSection/MainSection'
import { RightSection } from '../components/RightSection/RightSection'

function App() {

  const [isMenuOpened, setIsMenuOpened] = useState('-100%')

  const onClickMenuOpen = () => {
    setIsMenuOpened( '0' )
  }

  const onClickMenuClose = () => {
    setIsMenuOpened( '-100%' )
}

  return (
    <div className='main'>
      <SideBar onClickMenuClose={ onClickMenuClose } isMenuOpened={ isMenuOpened }/>
      <MainSection onClickMenuOpen={ onClickMenuOpen } />
      <RightSection />
    </div>
  )
}

export default App
