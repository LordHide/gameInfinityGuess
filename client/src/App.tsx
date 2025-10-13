
import './css/App.css'

import { useState, useEffect, useContext } from 'react'
import { Provider } from "./components/ui/provider"

import LoadinScreen from './components/GeneralComponents/LoadinScreen.tsx';
import AppScreen from './components/GeneralComponents/AppScreen.tsx';

import ProfileDataContext from './context/ProfileDataContext.tsx';

function App() {
  const [stateLoading, setStateLoading] = useState("sending");
  const [errorMesage, setErrorMesage] = useState({});
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    if (stateLoading == "sending") {
      setStateLoading("loading");
      let formData = new FormData();
      fetch(
        `http://127.0.0.1:8000/api/getProfileData`,
        {
          method: "POST",
          body: formData
        }
      )
        .then(res => res.json())
        .then(response => {
          if (response.success == 1) {
            setProfileData(response.data);
            console.log(response.data);
          }
          else {
            setErrorMesage(response.errors);
          }
          setStateLoading("pending");
        }
        )
        .catch((error) => {
          console.log(error);
          setStateLoading("error");
        }
        );
    }
  }, [stateLoading, errorMesage]
  )

  return (
    <div className="App">
      <ProfileDataContext.Provider value={[profileData, setProfileData]}>
        <Provider>
          {stateLoading == "loading" && <LoadinScreen />}
          {stateLoading == "pending" && <AppScreen />}
        </Provider>
      </ProfileDataContext.Provider >
    </div >
  )
}

export default App