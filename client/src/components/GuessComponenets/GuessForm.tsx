import {
  type ConexionStatusState,
  type LoadingState,
} from "../../types/typesStore.tsx";

import { Spinner, Button, Center, Dialog } from "@chakra-ui/react";

import { Tooltip } from "../ui/tooltip";

import { useLoadNamesList } from "../../hooks/useLoadNamesList.tsx";
import { useCheckValueName } from "../../hooks/useCheckValueName.tsx";
import { useJSONEmpty } from "../../hooks/useJSONEmpty.tsx";

import { useConexionStatusNameList } from "../../hooks/Stores/useConexionStatusNameList.tsx";
import { useNameList } from "../../hooks/Stores/useNameList.tsx";

import { GuessSelector } from "./GuessSelector.tsx";

export function GuessForm(): React.JSX.Element {
  const conexionStatusStore: ConexionStatusState = useConexionStatusNameList();
  const conexionStatus: LoadingState = conexionStatusStore.LoadingStatus;
  const functCheckName: () => void = useCheckValueName();
  const dissabledButton: boolean = useJSONEmpty(useNameList().selectedValue);
  const toolTipoMessage: string =
    conexionStatus !== "pending"
      ? "Loading names..."
      : "Guess the profiles name";

  useLoadNamesList();

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "1vw",
          justifyContent: "center",
        }}
      >
        {conexionStatus === "pending" && <GuessSelector />}
        {conexionStatus !== "pending" && <Spinner size="sm" />}
      </div>
      <Center marginTop="2vh">
        <Tooltip content={toolTipoMessage}>
          <Dialog.ActionTrigger asChild>
            <Button
              disabled={dissabledButton}
              variant="surface"
              onClick={functCheckName}
            >
              Guess
            </Button>
          </Dialog.ActionTrigger>
        </Tooltip>
      </Center>
    </>
  );
}

export default GuessForm;
