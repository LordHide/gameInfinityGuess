import { create } from 'zustand';


export interface PlayerStatsState {
    health: number
    accuracy: number
    updateHealth: (newHealth: number) => void
    updateAccuracy: (newAccuracy: number) => void
}

export const usePlayerStats = create<PlayerStatsState>((set) => ({
    health: 3,
    accuracy: 100,
    updateHealth: (newHealth: number) => set({ health: newHealth }),
    updateAccuracy: (newAccuracy: number) => set({ accuracy: newAccuracy }),
}))