import { create } from 'zustand';

export interface LoadoutState {
    loadout: Map<string, string[]>[]
    updateLoadout: (newLoadout: Map<string, string[]>[]) => void
}

export const useLoadout = create<LoadoutState>((set) => ({
    loadout: [],
    updateLoadout: (newLoadout: Map<string, string[]>[]) => set({ loadout: newLoadout }),
}))