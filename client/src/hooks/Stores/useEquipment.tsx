import { create } from 'zustand';

type ExtraValueTypes = "None" | "Single number" | "Double number" | string[];

export interface ProfileDataState {
    values: EquipmentValues[]
    updateValues: (newValues: EquipmentValues[]) => void
}

export interface EquipmentValues {
    value?: string
    label?: string
    extraValueType?: ExtraValueTypes
}

const Equipment = [
    { label: "Hacking Device", value: "Hacking Device" },
    { label: "FastPanda", value: "FastPanda" },
    { label: "MediKit", value: "MediKit" },
    { label: "Biometric Visor", value: "Biometric Visor" },
    { label: "X Visor", value: "X Visor" },
    { label: "Multispectral Visor L2", value: "Multispectral Visor L2" },
    { label: "Deactivator", value: "Deactivator" },
    { label: "GizmoKit", value: "GizmoKit" },
    { label: "Deployable Cover", value: "Deployable Cover" },
]

export const useEquipment = create<ProfileDataState>((set) => ({
    values: Equipment,
    updateValues: (newValues: EquipmentValues[]) => set({ values: newValues }),
}))