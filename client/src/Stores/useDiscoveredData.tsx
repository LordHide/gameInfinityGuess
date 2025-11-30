import { create } from 'zustand';
import { useLoadout } from './useLoadout.tsx';

import { type ProfileState, type StatsMap, type OptionStatus, type OptionStatusStates, type OptionStatusClassName } from '@local-types/typesStore'

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
    getStatsOptionStatus: (originalValue: string, enteringValue: string): OptionStatus => {
        let status: OptionStatusStates = "";
        let className: OptionStatusClassName = "";
        if (originalValue === enteringValue) {
            status = "";
            className = "succes";
        } else if (Number(enteringValue) > Number(originalValue)) {
            status = "+";
            className = "failed";
        } else if (Number(enteringValue) < Number(originalValue)) {
            status = "-";
            className = "failed";
        }
        return { value: enteringValue, status: status, className: className };
    }
}))