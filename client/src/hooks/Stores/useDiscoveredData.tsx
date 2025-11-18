import { create } from 'zustand';
import { useLoadout } from './useLoadout.tsx';

import { type ProfileState, type StatsMap } from '../../types/typesStore'

export const useDiscoveredData = create<ProfileState>((set) => ({
    name: "",
    stats: new Map<string, string>(),
    equipments: [],
    skills: [],
    loadout: useLoadout.getState(),
    updateName: (newName: string) => set({ name: newName }),
    updateStats: (newStats: StatsMap) => set({ stats: newStats }),
    updateEquipment: (newEquipment: string[]) => set({ equipments: newEquipment }),
    updateSkills: (newSkills: string[]) => set({ skills: newSkills }),
    updateLoadout: () => set({ loadout: useLoadout.getState() }),
}))