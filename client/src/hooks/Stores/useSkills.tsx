import { create } from 'zustand';

type ExtraValueTypes = "None" | "Single number" | "Double number" | "Text";

export interface ProfileDataState {
    values: SkillsValues[]
    updateValues: (newValues: SkillsValues[]) => void
}

export interface SkillsValues {
    value?: string
    label?: string
    extraValueType?: ExtraValueTypes
}

const Skills = [
    { label: "Hacker", value: "Hacker" },
    { label: "Forward Observer", value: "Forward Observer" },
    { label: "Paramedic", value: "Paramedic" },
    { label: "Lieutenant", value: "Lieutenant" },
    { label: "Specialist Operative", value: "Specialist Operative" },
    { label: "Sapper", value: "Sapper" },
    { label: "Triangulated Fire", value: "Triangulated Fire" },
    { label: "Minelayer", value: "Minelayer" },
    { label: "Sensor", value: "Sensor" },
]

export const useSkills = create<ProfileDataState>((set) => ({
    values: Skills,
    updateValues: (newValues: SkillsValues[]) => set({ values: newValues }),
}))