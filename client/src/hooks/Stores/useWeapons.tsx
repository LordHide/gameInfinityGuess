import { create } from 'zustand';

type ExtraValueTypes = "None" | "Single number" | "Double number" | string[];

export interface ProfileDataState {
    values: WeaponsValues[]
    updateValues: (newValues: WeaponsValues[]) => void
}

export interface WeaponsValues {
    value?: string
    label?: string
    extraValueType?: ExtraValueTypes
}

const Weapons = [
    { label: "Combi Rifle", value: "Combi Rifle" },
    { label: "Heavy Machine Gun", value: "Heavy Machine Gun" },
    { label: "Missile Launcher", value: "Missile Launcher" },
    { label: "MULTI Sniper Rifle", value: "MULTI Sniper Rifle" },
    { label: "Flash Pulse", value: "Flash Pulse" },
    { label: "Pistol", value: "Pistol" },
    { label: "CC Weapon", value: "CC Weapon" },
    { label: "D-Charges", value: "D-Charges" },
    { label: "AP Mine", value: "AP Mine" },
]

export const useWeapons = create<ProfileDataState>((set) => ({
    values: Weapons,
    updateValues: (newValues: WeaponsValues[]) => set({ values: newValues }),
}))