import { type TextOptionsValues, type StatDataState, type StoreTypes, type ConexionStatusColectionState, type ExtraValueTypes, type LoadingState } from '../../types/typesStore.tsx';

import { Spinner, Button, Center } from "@chakra-ui/react";

import { useActiveFormStore } from '../../hooks/useActiveFormStore.tsx';
import { useCheckValueProfile } from '../../hooks/useCheckValueProfile.tsx';
import { useLoadStatsStoreData } from '../../hooks/useLoadStatsStoreData.tsx';

import HintFormSingleNumber from './HintFormSingleNumber.tsx';
import HintFormDoubleNumber from './HintFormDoubleNumber.tsx';
import HintFormTextOptions from './HintFormTextOptions.tsx';
import HintSelector from './HintSelector.tsx';

import { useConexionStatusStatsStoreData } from '../../hooks/Stores/useConexionStatusStatsStoreData.tsx';

export function HintForm(state: { typeStore: StoreTypes }): React.JSX.Element {

    const conexionStatusStore: ConexionStatusColectionState = useConexionStatusStatsStoreData();
    const activeStore: StatDataState = useActiveFormStore(state.typeStore);
    const extraValueType: ExtraValueTypes = activeStore?.selectedValue?.extraValueType ?? "None";
    const textOptions: TextOptionsValues[] = activeStore?.selectedValue?.textOptions ?? [] as TextOptionsValues[];
    const conexionStatus: LoadingState = conexionStatusStore.LoadingStatus[state.typeStore];
    const functCheckValueProfile: () => void = useCheckValueProfile(state.typeStore);

    useLoadStatsStoreData(state.typeStore);


    return <>
        <div style={{ display: "flex", width: "100%", gap: "1vw", justifyContent: "center" }}>
            {conexionStatus === "pending" && <HintSelector currentStore={activeStore} />}
            {conexionStatus === "pending" && extraValueType === "Single number" && <HintFormSingleNumber currentStore={activeStore} textOptions={textOptions} />}
            {conexionStatus === "pending" && extraValueType === "Double number" && <HintFormDoubleNumber currentStore={activeStore} textOptions={textOptions} />}
            {conexionStatus === "pending" && extraValueType === "Text Options" && <HintFormTextOptions currentStore={activeStore} textOptions={textOptions} />}
            {conexionStatus !== "pending" && <Spinner size="sm" />}
        </div>
        <Center marginTop="2vh" >
            <Button variant="surface" onClick={functCheckValueProfile}>Ask</Button>
        </Center>
    </>;
}

export default HintForm