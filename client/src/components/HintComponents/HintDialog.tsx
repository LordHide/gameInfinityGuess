
import { Dialog, Button, CloseButton, Portal } from "@chakra-ui/react"

import HintTabs from './HintTabs.tsx';

import { useConexionStatusStatsStoreData } from '@Stores/useConexionStatusStatsStoreData.tsx';

import { useCheckStasData } from '@hooks/useCheckStasData.tsx';
import { useResetFormStores } from '@hooks/useResetFormStores.tsx';

import { type LoadingStatusColection, type ConexionStatusColectionState } from '@local-types/typesStore.tsx';


export function HintDialog(): React.JSX.Element {

    const stateLoadingStore: ConexionStatusColectionState = useConexionStatusStatsStoreData();
    const isStatsDataConnected: boolean = useCheckStasData();
    const sendLoadingStatus: LoadingStatusColection = {
        stats: "sending",
        skills: "sending",
        equipments: "sending",
        weapons: "sending",
        others: "sending",
    }
    const functResetFormStores: () => void = useResetFormStores();

    const funcLoadStores: () => void = () => {
        if (!isStatsDataConnected) { stateLoadingStore.updateLoadingStatus(sendLoadingStatus); }
    };

    return <div className="hint-button">
        <Dialog.Root onExitComplete={functResetFormStores}>
            <Dialog.Trigger asChild>
                <Button variant="outline" size="lg" className="HintButton" onClick={funcLoadStores}>
                    Ask Hint
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title as="h2">Select a hint category</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <HintTabs />
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

export default HintDialog;