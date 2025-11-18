import { create } from 'zustand';

import { type LoadoutState } from '../../types/typesStore'

export const useLoadout = create<LoadoutState>((set) => ({
    loadout: [],
    updateLoadout: (newLoadout: Map<string, string[]>[]) => set({ loadout: newLoadout }),
}))