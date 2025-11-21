import { NumberInput } from "@chakra-ui/react";

import { type StatDataState, type TextOptionsValues } from '../../types/typesStore'

export function HintFormDoubleNumber(state: { currentStore: StatDataState, textOptions: TextOptionsValues[] }): React.JSX.Element {

    const defaulOptions: TextOptionsValues = state.textOptions[0] as TextOptionsValues;
    const defaulValue: string[] = defaulOptions.value.split("-");

    return <>
        <NumberInput.Root
            onValueChange={(details) => {
                const selectedItem: number = details?.valueAsNumber ?? 0;
                let extraValue: string[] = []

                if (typeof state.currentStore.aplyedExtraValue == "string") {
                    const aplyedExtraValue: string = state.currentStore.aplyedExtraValue;
                    extraValue = aplyedExtraValue.split("-");
                }

                extraValue[0] = `${selectedItem}`;
                state.currentStore.updateAplyedExtraValue(extraValue.join("-"));
            }}
            size={"sm"} key={"sm"} defaultValue={`${defaulValue[0]}`} width="3vw" min={0} max={25} allowMouseWheel >
            <NumberInput.Input />
        </NumberInput.Root>
        <span>-</span >
        <NumberInput.Root
            onValueChange={(details) => {
                const selectedItem: number = details?.valueAsNumber ?? 0;
                let extraValue: string[] = []

                if (typeof state.currentStore.aplyedExtraValue == "string") {
                    const aplyedExtraValue: string = state.currentStore.aplyedExtraValue;
                    extraValue = aplyedExtraValue.split("-");
                }

                extraValue[1] = `${selectedItem}`;

                state.currentStore.updateAplyedExtraValue(extraValue.join("-"));
            }}
            size={"sm"} key={"sm"} defaultValue={`${defaulValue[1]}`} width="3vw" min={0} max={25} allowMouseWheel>
            <NumberInput.Input />
        </NumberInput.Root>
    </>;
}

export default HintFormDoubleNumber;