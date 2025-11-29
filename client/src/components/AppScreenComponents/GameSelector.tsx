import { type GameModeState, useGameMode } from '@Stores/useGameMode.tsx';
import { useConexionStatusProfileData } from '@Stores/useConexionStatusProfileData.tsx';

import { type ConexionStatusState } from '@local-types/typesStore.tsx';

import basic from '@assets/basic.png';

import { AbsoluteCenter } from "@chakra-ui/react";

import '@css/AppScreenComponents/GameSelector.css';

export function GameSelector(): React.JSX.Element {
    const gameModeStore: GameModeState = useGameMode();
    const conexionStatus: ConexionStatusState = useConexionStatusProfileData();
    return <>
        <AbsoluteCenter>
            <div className="gameModeSection">
                <div className="gameModeButton" onClick={() => { gameModeStore.updateGameMode("basic"); conexionStatus.updateLoadingStatus("sending"); }} >
                    <img className="gameModeImg" src={basic} alt="basic" />
                    <div> REGULAR </div>
                </div>
                <div className="gameModeButton" onClick={() => { gameModeStore.updateGameMode(""); conexionStatus.updateLoadingStatus("pending"); }} >
                    <img className="gameModeImg" src={basic} alt="" />
                    <div> UPCOMING </div>
                </div>
                <div className="gameModeButton" onClick={() => { gameModeStore.updateGameMode(""); conexionStatus.updateLoadingStatus("pending"); }} >
                    <img className="gameModeImg" src={basic} alt="" />
                    <div> UPCOMING </div>
                </div>
            </div>
        </AbsoluteCenter >
    </>;
}

export default GameSelector;