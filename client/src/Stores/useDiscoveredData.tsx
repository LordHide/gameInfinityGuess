import { create } from 'zustand';
import { useLoadout } from './useLoadout.tsx';

import { type ProfileState, type StatsMap, type OptionStatus } from '@local-types/typesStore'

export const useDiscoveredData = create<ProfileState>((set) => ({
    name: "",
    stats: new Map<string, OptionStatus>(),
    equipments: [],
    skills: [],
    loadout: useLoadout.getState(),
    updateName: (newName: string) => set({ name: newName }),
    updateStats: (newStats: StatsMap) => set({ stats: newStats }),
    updateEquipment: (newEquipment: OptionStatus[]) => set({ equipments: newEquipment }),
    updateSkills: (newSkills: OptionStatus[]) => set({ skills: newSkills }),
    updateLoadout: () => set({ loadout: useLoadout.getState() }),
}))