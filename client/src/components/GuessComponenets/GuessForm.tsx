import { type ConexionStatusState } from '../../types/typesStore.tsx';

import { Spinner, Button, Center } from "@chakra-ui/react";

import { useLoadNamesList } from '../../hooks/useLoadNamesList.tsx';
import { useCheckValueName } from '../../hooks/useCheckValueName.tsx';

import { useConexionStatusNameList } from '../../hooks/Stores/useConexionStatusNameList.tsx';

import { GuessSelector } from "./GuessSelector.tsx";

export function GuessForm(): React.JSX.Element {

    const conexionStatusStore: ConexionStatusState = useConexionStatusNameList();
    const conexionStatus = conexionStatusStore.LoadingStatus;
    const functCheckName = useCheckValueName();

    useLoadNamesList();


    return <>
        <div style={{ display: "flex", width: "100%", gap: "1vw", justifyContent: "center" }}>
            {conexionStatus === "pending" && <GuessSelector />}
            {conexionStatus !== "pending" && <Spinner size="sm" />}
        </div>
        <Center marginTop="2vh" >
            <Button variant="surface" onClick={functCheckName}>Guess</Button>
        </Center>
    </>;
}

export default GuessForm