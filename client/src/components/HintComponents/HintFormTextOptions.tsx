import { Combobox, useFilter, useListCollection } from "@chakra-ui/react";
import { type TextOptionsValues, type StatDataState } from '../../types/typesStore'

export function HintFormTextOptions(values: { currentStore: StatDataState, textOptions: TextOptionsValues[] }): React.JSX.Element {

    const { contains } = useFilter({ sensitivity: "base" })

    const { collection, filter } = useListCollection({
        initialItems: values.textOptions,
        filter: contains,
    })

    return <>
        <Combobox.Root
            collection={collection}
            onInputValueChange={(e) => filter(e.inputValue)}
            onValueChange={(details) => {
                const selectedItem: TextOptionsValues = details.items[0] as TextOptionsValues;
                values.currentStore.updateAplyedExtraValue(selectedItem.label);
            }}
            width="25vw"
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
        </Combobox.Root>
    </>;
}

export default HintFormTextOptions;