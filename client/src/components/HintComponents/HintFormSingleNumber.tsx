import { NumberInput } from "@chakra-ui/react";

import { type StatDataState, type TextOptionsValues } from '@local-types/typesStore'

export function HintFormSingleNumber(state: { currentStore: StatDataState, textOptions: TextOptionsValues[] }): React.JSX.Element {

    const defaulOptions: TextOptionsValues = state.textOptions[0] as TextOptionsValues;
    const defaulValue: string = defaulOptions.value;

    return <>
        <NumberInput.Root
            onValueChange={(details) => {
                const selectedItem: string = details?.value ?? "0";

                state.currentStore.updateAplyedExtraValue(selectedItem);
            }}
            size={"sm"} key={"sm"} defaultValue={`${defaulValue}`} width="3vw" min={0} max={25} allowMouseWheel>
            <NumberInput.Input />
        </NumberInput.Root>
    </>;
}

export default HintFormSingleNumber;