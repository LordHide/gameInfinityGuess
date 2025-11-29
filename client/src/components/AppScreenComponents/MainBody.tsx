import GameUI from "./GameUI";
import EndGamePanel from "./EndGamePanel";

import HintDialog from "@components/HintComponents/HintDialog";
import GuessDialog from "@components/GuessComponenets/GuessDialog";
import UnitCard from "@components/UnitCardComponents/UnitCard";

import { usePlayerStats } from "@Stores/usePlayerStats.tsx";

import {
  type PlayerStatsState,
  type statusPlayer,
} from "@local-types/typesStore.tsx";

import "@css/AppScreenComponents/HintButton.css";

import { AbsoluteCenter } from "@chakra-ui/react";

export function MainBody(): React.JSX.Element {
  const playerStatsStore: PlayerStatsState = usePlayerStats();
  const gameStatus: statusPlayer = playerStatsStore.status;
  return (
    <>
      <div className="player-section">
        <GameUI />
        <div className="player-buttons">
          <HintDialog />
          <GuessDialog />
        </div>
      </div>
      <AbsoluteCenter>
        <UnitCard />
      </AbsoluteCenter>
      {gameStatus != "active" && <EndGamePanel typeOfEnd={gameStatus} />}
    </>
  );
}

export default MainBody;
