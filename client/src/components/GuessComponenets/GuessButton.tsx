
import { Dialog, Button, CloseButton, Portal } from "@chakra-ui/react"

import { GuessForm } from "./GuessForm"

import { type ConexionStatusState } from '../../types/typesStore.tsx';

import { useConexionStatusNameList } from '../../hooks/Stores/useConexionStatusNameList.tsx';

import { useCheckNamesData } from '../../hooks/useCheckNamesData.tsx';
import { useResetFormStores } from '../../hooks/useResetFormStores.tsx';

export function GuessButton(): React.JSX.Element {

    const stateLoadingStore: ConexionStatusState = useConexionStatusNameList();
    const isStatsDataConnected: boolean = useCheckNamesData();
    const funcResetFormStores = useResetFormStores();

    const funcLoadStores: () => void = () => {
        if (!isStatsDataConnected) { funcResetFormStores(); stateLoadingStore.updateLoadingStatus("sending"); }
    };

    return <div className="hint-button">
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button variant="outline" size="lg" className="GuessButton" onClick={funcLoadStores} >
                    Guess Name
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Body>
                            <GuessForm />
                        </Dialog.Body>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="2xs" variant="ghost" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    </div>;
}

export default GuessButton