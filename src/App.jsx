import { useState } from 'react'

import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import MySection from './components/MySection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Home/>
      <MySection/>
      <Footer/>
    </>
  )
}

export default App
