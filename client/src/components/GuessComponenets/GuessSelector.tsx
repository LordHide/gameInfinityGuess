import { Combobox, useFilter, useListCollection } from "@chakra-ui/react";

import { type StatColectionValues, type StatDataState } from '../../types/typesStore.tsx';

import { useNameList } from "../../hooks/Stores/useNameList.tsx";

export function GuessSelector(): React.JSX.Element {

    const { contains } = useFilter({ sensitivity: "base" })

    const nameListStore: StatDataState = useNameList();
    const activeOptions: StatColectionValues[] = nameListStore.values;

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
            nameListStore.updateSelectedValue(selectedItem);
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

export default GuessSelector