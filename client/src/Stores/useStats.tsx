import { create } from 'zustand';

import { type StatDataState, type StatColectionValues, type AplyedValue } from '@local-types/typesStore'

export const useStats = create<StatDataState>((set) => ({
    values: [],
    selectedValue: undefined,
    aplyedExtraValue: undefined,
    updateValues: (newValues: StatColectionValues[]) => set({ values: newValues }),
    updateSelectedValue: (newSelectedValue: StatColectionValues) => set({ selectedValue: newSelectedValue }),
    updateAplyedExtraValue: (newAplyedExtraValue: AplyedValue) => set({ aplyedExtraValue: newAplyedExtraValue }),
    selectValue: (label: string) => set((state) => ({ selectedValue: state.values.find(stat => stat.label === label) })),
}))