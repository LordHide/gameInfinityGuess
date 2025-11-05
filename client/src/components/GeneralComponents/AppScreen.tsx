
import '../../css/App.css'

import { Provider } from "../ui/provider"

import { useLoadProfileData } from '../../hooks/useLoadProfileData.tsx';

import { useConexionStatus } from '../../hooks/Stores/useConexionStatus.tsx';
import { type GameModeState, useGameMode } from '../../hooks/Stores/useGameMode.tsx';

import LoadinScreen from '../GeneralComponents/LoadinScreen.tsx';
import GameScreen from '../GeneralComponents/GameScreen.tsx';
import GameSelector from '../AppScreenComponents/GameSelector.tsx';

function AppScreen() {

    const gameModeStore: GameModeState = useGameMode();
    const stateLoadingStore = useConexionStatus();
    const stateLoading = stateLoadingStore.LoadingStatus;


    useLoadProfileData()

    return <div className="App">
        <Provider>
            {stateLoading == "loading" && <LoadinScreen />}
            {stateLoading == "pending" && gameModeStore.gameMode !== "" && <GameScreen />}
            {stateLoading == "pending" && gameModeStore.gameMode === "" && <GameSelector />}
        </Provider>
    </div >;
}

export default AppScreen