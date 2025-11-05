import { create } from 'zustand';

export interface ProfileDataState {
    name: string
    stats: Stats
    equipment: string[]
    skills: string[]
    loadout: Loadout[]
    updateName: (newName: string) => void
    updateStats: (newStats: Stats) => void
    updateEquipment: (newEquipment: string[]) => void
    updateSkills: (newSkills: string[]) => void
    updateLoadout: (newLoadout: Loadout[]) => void
}

export interface Loadout {
    equipment: string[]
    skills: string[]
    Range_Weapons: string[]
    Melee_Weapons: string[]
}

export interface Stats {
    Mov?: string
    CC?: number
    BS?: number
    PH?: number
    WIP?: number
    ARM?: number
    BTS?: number
    VITA?: number
    S?: number
}

export const useProfileData = create<ProfileDataState>((set) => ({
    name: "",
    stats: {},
    equipment: [],
    skills: [],
    loadout: [],
    updateName: (newName: string) => set({ name: newName }),
    updateStats: (newStats: Stats) => set({ stats: newStats }),
    updateEquipment: (newEquipment: string[]) => set({ equipment: newEquipment }),
    updateSkills: (newSkills: string[]) => set({ skills: newSkills }),
    updateLoadout: (newLoadout: Loadout[]) => set({ loadout: newLoadout }),
}))