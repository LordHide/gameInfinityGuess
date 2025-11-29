import { Combobox, useFilter, useListCollection } from "@chakra-ui/react";

import { type StatColectionValues, type StatDataState, type TextOptionsValues } from '@local-types/typesStore.tsx';

export function HintSelector(state: { currentStore: StatDataState }): React.JSX.Element {

    const { contains } = useFilter({ sensitivity: "base" })

    const activeOptions: StatColectionValues[] = state.currentStore.values;

    const { collection, filter } = useListCollection({
        initialItems: activeOptions,
        filter: contains,
    })

    return <Combobox.Root
        collection={collection}
        onInputValueChange={(e) => {
            filter(e.inputValue)
        }}
        onValueChange={(details) => {
            const selectedItem: StatColectionValues = details.items[0] as StatColectionValues;
            state.currentStore.updateSelectedValue(selectedItem);
            if (selectedItem !== undefined) {
                const selectedOotions = selectedItem.textOptions as TextOptionsValues[];
                state.currentStore.updateAplyedExtraValue(selectedOotions[0].value);
            }
        }}
        width="22vw"
        openOnClick
    >
        <Combobox.Control>
            <Combobox.Input placeholder="Type to search" />
            <Combobox.IndicatorGroup>
                <Combobox.ClearTrigger />
                <Combobox.Trigger />
            </Combobox.IndicatorGroup>
        </Combobox.Control>
        <Combobox.Positioner>
            <Combobox.Content>
                <Combobox.Empty>No items found</Combobox.Empty>
                {collection.items.map((item) => (
                    <Combobox.Item item={item} key={item.value}>
                        {item.label}
                        <Combobox.ItemIndicator />
                    </Combobox.Item>
                ))}
            </Combobox.Content>
        </Combobox.Positioner>
    </Combobox.Root>;
}

export default HintSelector