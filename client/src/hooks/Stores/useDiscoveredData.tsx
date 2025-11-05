import { create } from 'zustand';
import { type LoadoutState, useLoadout } from './useLoadout.tsx';

export type Profile = Map<string, string | Map<string, string | number> | string[]>;
export type Stats = Map<string, string>;

export interface ProfileState {
    name: string
    stats: Stats
    equipment: string[]
    skills: string[]
    loadout: LoadoutState
    updateName: (newName: string) => void
    updateStats: (newStats: Stats) => void
    updateEquipment: (newEquipment: string[]) => void
    updateSkills: (newSkills: string[]) => void
    // updateLoadout: (newLoadout: LoadoutState) => void
}

export const useDiscoveredData = create<ProfileState>((set) => ({
    name: "",
    stats: new Map<string, string>(),
    equipment: [],
    skills: [],
    loadout: useLoadout.getState(),
    updateName: (newName: string) => set({ name: newName }),
    updateStats: (newStats: Stats) => set({ stats: newStats }),
    updateEquipment: (newEquipment: string[]) => set({ equipment: newEquipment }),
    updateSkills: (newSkills: string[]) => set({ skills: newSkills }),
}))