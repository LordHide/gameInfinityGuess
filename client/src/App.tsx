import { useState } from 'react'
import TopBanner from './components/TopBanner.tsx';
import MainBody from './components/MainBody.tsx';
import './css/App.css'
import { Provider } from "./components/ui/provider"

function App() {
  return (
    <div className="App">
      <Provider>
        <TopBanner />
        <MainBody />
      </Provider>
    </div >
  )
}

export default App