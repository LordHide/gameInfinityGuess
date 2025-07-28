import { useState } from 'react'
import { Heading } from "@chakra-ui/react"
import { Provider } from "./components/ui/provider"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider>
        <Heading size="6xl">Titulo</Heading>
      </Provider>
    </>
  )
}

export default App
