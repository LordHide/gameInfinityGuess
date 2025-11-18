import { create } from 'zustand';

import { type ProfileDataState, type Stats, type Loadout } from '../../types/typesStore'

export const useProfileData = create<ProfileDataState>((set) => ({
    name: "",
    stats: {},
    equipments: [],
    skills: [],
    loadout: [],
    updateName: (newName: string) => set({ name: newName }),
    updateStats: (newStats: Stats) => set({ stats: newStats }),
    updateEquipment: (newEquipment: string[]) => set({ equipments: newEquipment }),
    updateSkills: (newSkills: string[]) => set({ skills: newSkills }),
    updateLoadout: (newLoadout: Loadout[]) => set({ loadout: newLoadout }),
}))