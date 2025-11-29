
import { Dialog, Button, CloseButton, Portal } from "@chakra-ui/react"

import { GuessForm } from "./GuessForm"

import { type ConexionStatusState } from '@local-types/typesStore.tsx';

import { useConexionStatusNameList } from '@Stores/useConexionStatusNameList.tsx';

import { useCheckNamesData } from '@hooks/useCheckNamesData.tsx';
import { useResetFormStores } from '@hooks/useResetFormStores.tsx';

export function GuessDialog(): React.JSX.Element {

    const stateLoadingStore: ConexionStatusState = useConexionStatusNameList();
    const isStatsDataConnected: boolean = useCheckNamesData();
    const funcResetFormStores: () => void = useResetFormStores();

    const funcLoadStores: () => void = () => {
        funcResetFormStores();
        if (!isStatsDataConnected) { stateLoadingStore.updateLoadingStatus("sending"); }
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
                        <Dialog.Header>
                            <Dialog.Title as="h2">Guess the profile</Dialog.Title>
                        </Dialog.Header>
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

export default GuessDialog;