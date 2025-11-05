import { create } from 'zustand';

type ExtraValueTypes = "None" | "Single number" | "Double number" | string[];

export interface ProfileDataState {
    values: StatsValues[]
    updateValues: (newValues: StatsValues[]) => void
}

export interface StatsValues {
    value?: string
    label?: string
    extraValueType?: ExtraValueTypes
}

const Stats = [
    { label: "MOV", value: "MOV" },
    { label: "CC", value: "CC" },
    { label: "BS", value: "BS" },
    { label: "PH", value: "PH" },
    { label: "WIP", value: "ARM" },
    { label: "BTS", value: "BTS" },
    { label: "VITA", value: "VITA" },
    { label: "STR", value: "STR" },
    { label: "S", value: "S" },
]

export const useStats = create<ProfileDataState>((set) => ({
    values: Stats,
    updateValues: (newValues: StatsValues[]) => set({ values: newValues }),
}))