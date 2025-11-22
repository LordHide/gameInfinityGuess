import { create } from "zustand";

import {
  type PlayerStatsState,
  type statusPlayer,
} from "../../types/typesStore";

export const usePlayerStats = create<PlayerStatsState>((set) => ({
  health: 3,
  accuracy: 100,
  status: "active",
  updateHealth: (newHealth: number) => set({ health: newHealth }),
  updateAccuracy: (newAccuracy: number) => set({ accuracy: newAccuracy }),
  updateStatus: (newStatus: statusPlayer) => set({ status: newStatus }),
  resetStats: () => set({ accuracy: 100, health: 3 }),
}));
