import { create } from 'zustand';

import { type ProfileDataState, type Stats, type Loadout, type OptionStatus } from '@local-types/typesStore'

export const useProfileData = create<ProfileDataState>((set) => ({
    name: "",
    stats: {} as Stats,
    equipments: [],
    skills: [],
    loadout: [],
    updateName: (newName: string) => set({ name: newName }),
    updateStats: (newStats: Stats) => set({ stats: newStats }),
    updateEquipment: (newEquipment: OptionStatus[]) => set({ equipments: newEquipment }),
    updateSkills: (newSkills: OptionStatus[]) => set({ skills: newSkills }),
    updateLoadout: (newLoadout: Loadout[]) => set({ loadout: newLoadout }),
}))