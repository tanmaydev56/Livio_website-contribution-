import { useState } from 'react'
// import './App.css'
import NavBar from '../components/navigationBar.jsx'
import Category from '../components/Category.jsx'
import Collection from '../components/Collection.jsx'
import BlackBox from '../components/BlackBox.jsx'
import Luxe from '../components/luxeLounger.jsx'

function App() {
  const [showCollection, setShowCollection] = useState(false);

  return (
    <div className='App'>
      <Luxe />
      <Category onShowCollection={() => setShowCollection(true)} />
    </div>
      
  )
}

export default App
