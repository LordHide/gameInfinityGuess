
import GameUI from "./GameUI";
import EndGamePanel from "./EndGamePanel";
import HintButton from "../HintComponents/HintButton";
import GuessButton from "../GuessComponenets/GuessButton";
import UnitCard from "../UnitCardComponents/UnitCard";

import { usePlayerStats } from '../../hooks/Stores/usePlayerStats.tsx';

import { type PlayerStatsState } from '../../types/typesStore.tsx';

import '../../css/AppScreenComponents/HintButton.css';

import { AbsoluteCenter } from "@chakra-ui/react";

export function MainBody(): React.JSX.Element {
    const playerStatsStore: PlayerStatsState = usePlayerStats();
    const health: number = playerStatsStore.health;
    return <>
        <div className="player-section">
            <GameUI />
            <div className="player-buttons">
                <HintButton />
                <GuessButton />
            </div>
        </div>
        <AbsoluteCenter>
            <UnitCard />
        </AbsoluteCenter>
        {health == 0 && <EndGamePanel />}
    </>;
}

export default MainBody