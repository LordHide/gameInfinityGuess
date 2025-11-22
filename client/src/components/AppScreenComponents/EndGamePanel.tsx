import { Dialog, Center } from "@chakra-ui/react";

import {
  type ConexionStatusState,
  type PlayerStatsState,
  type statusPlayer,
} from "../../types/typesStore.tsx";

import { useConexionStatusProfileData } from "../../hooks/Stores/useConexionStatusProfileData.tsx";
import { usePlayerStats } from "../../hooks/Stores/usePlayerStats.tsx";

export function EndGamePanel(value: {
  typeOfEnd: statusPlayer;
}): React.JSX.Element {
  const stateLoadingStore: ConexionStatusState = useConexionStatusProfileData();
  const playerStatsStore: PlayerStatsState = usePlayerStats();

  const dialogTitle: string =
    value.typeOfEnd === "win" ? "Congratulations!" : "Game Over";

  const functCheckName: () => void = () => {
    playerStatsStore.resetStats();
    stateLoadingStore.updateLoadingStatus("sending");
  };

  return (
    <Dialog.Root open={true}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title as="h2">{dialogTitle}</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <div>
              <p>Thank you for playing!</p>
            </div>
          </Dialog.Body>
          <Dialog.Footer>
            <Center marginTop="2vh">
              <Dialog.ActionTrigger asChild>
                <button onClick={functCheckName}>Play Again</button>
              </Dialog.ActionTrigger>
            </Center>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}

export default EndGamePanel;
