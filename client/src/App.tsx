
import './css/App.css'

import appLogo from './assets/logo.png';
import heart from './assets/Heart.png';
import crosshair from './assets/Crosshair.png';

import AppScreen from './components/GeneralComponents/AppScreen.tsx';


function App() {

  return <div className="App">
    <link rel="preload" as="image" href={appLogo} />
    <link rel="preload" as="image" href={heart} />
    <link rel="preload" as="image" href={crosshair} />
    <AppScreen />
  </div >;
}

export default App