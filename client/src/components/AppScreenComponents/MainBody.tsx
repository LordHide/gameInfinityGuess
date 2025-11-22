import GameUI from "./GameUI";
import EndGamePanel from "./EndGamePanel";
import HintButton from "../HintComponents/HintButton";
import GuessButton from "../GuessComponenets/GuessButton";
import UnitCard from "../UnitCardComponents/UnitCard";

import { usePlayerStats } from "../../hooks/Stores/usePlayerStats.tsx";

import {
  type PlayerStatsState,
  type statusPlayer,
} from "../../types/typesStore.tsx";

import "../../css/AppScreenComponents/HintButton.css";

import { AbsoluteCenter } from "@chakra-ui/react";

export function MainBody(): React.JSX.Element {
  const playerStatsStore: PlayerStatsState = usePlayerStats();
  const gameStatus: statusPlayer = playerStatsStore.status;
  return (
    <>
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
      {gameStatus == "defeated" && <EndGamePanel typeOfEnd={gameStatus} />}
    </>
  );
}

export default MainBody;
