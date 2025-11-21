import { create } from 'zustand';

import { type StatDataState, type StatColectionValues, type AplyedValue } from "../..//types/typesStore"

export const useNameList = create<StatDataState>((set) => ({
    values: [],
    selectedValue: undefined,
    aplyedExtraValue: undefined,
    updateValues: (newValues: StatColectionValues[]) => set({ values: newValues }),
    updateSelectedValue: (newSelectedValue: StatColectionValues) => set({ selectedValue: newSelectedValue }),
    updateAplyedExtraValue: (newAplyedExtraValue: AplyedValue) => set({ aplyedExtraValue: newAplyedExtraValue }),
    selectValue: (label: string) => set((state) => ({ selectedValue: state.values.find(name => name.label === label) })),
}));

export default useNameList;