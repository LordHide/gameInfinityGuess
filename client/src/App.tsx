
import './css/App.css'

import appLogo from './assets/logo.png';

import AppScreen from './components/GeneralComponents/AppScreen.tsx';


function App() {

  return <div className="App">
    <link rel="preload" as="image" href={appLogo} />
    <AppScreen />
  </div >;
}

export default App