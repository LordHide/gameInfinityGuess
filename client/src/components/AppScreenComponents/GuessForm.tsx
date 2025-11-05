import { Combobox, useFilter, useListCollection } from "@chakra-ui/react"

import { type StoreTypes, useActiveFormStore } from '../../hooks/useActiveFormStore.tsx';

export function GuessForm(state: { typeStore: StoreTypes }): React.JSX.Element {

    const { contains } = useFilter({ sensitivity: "base" })

    const activeStore = useActiveFormStore(state.typeStore);
    const activeOptions = activeStore.values;

    const { collection, filter } = useListCollection({
        initialItems: activeOptions,
        filter: contains,
    })


    return <Combobox.Root
        collection={collection}
        onInputValueChange={(e) => filter(e.inputValue)}
        width="320px"
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

export default GuessForm