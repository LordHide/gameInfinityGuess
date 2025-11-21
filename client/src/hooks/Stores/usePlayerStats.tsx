import { create } from 'zustand';

import { type PlayerStatsState } from '../../types/typesStore';

export const usePlayerStats = create<PlayerStatsState>((set) => ({
    health: 3,
    accuracy: 100,
    updateHealth: (newHealth: number) => set({ health: newHealth }),
    updateAccuracy: (newAccuracy: number) => set({ accuracy: newAccuracy }),
}))