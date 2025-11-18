
import '../../css/App.css'



import { useLoadProfileData } from '../../hooks/useLoadProfileData.tsx';

import { useConexionStatusProfileData } from '../../hooks/Stores/useConexionStatusProfileData.tsx';
import { type GameModeState, useGameMode } from '../../hooks/Stores/useGameMode.tsx';

import LoadinScreen from '../GeneralComponents/LoadinScreen.tsx';
import GameScreen from '../GeneralComponents/GameScreen.tsx';
import GameSelector from '../AppScreenComponents/GameSelector.tsx';

function AppScreen() {

    const gameModeStore: GameModeState = useGameMode();
    const stateLoadingStore = useConexionStatusProfileData();
    const stateLoading = stateLoadingStore.LoadingStatus;


    useLoadProfileData()

    return <div className="">
        {stateLoading == "loading" && <LoadinScreen />}
        {stateLoading == "pending" && gameModeStore.gameMode === "" && <GameSelector />}
        {stateLoading == "pending" && gameModeStore.gameMode !== "" && <GameScreen />}
    </div >;
}

export default AppScreen