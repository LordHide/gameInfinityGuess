import { create } from "zustand";

import {
  type PlayerStatsState,
  type statusPlayer,
} from "@local-types/typesStore";

export const usePlayerStats = create<PlayerStatsState>((set) => ({
  health: 3,
  accuracy: 100,
  status: "active",
  updateHealth: (newHealth: number) => set({ health: newHealth }),
  loseHealth: (amount: number) => set((state) => ({ health: state.health - amount })),
  gainHealth: (amount: number) => set((state) => ({ health: state.health + amount })),
  checkPlayerIsDead: () => set((state) => ({ status: state.health == 0 ? "defeated" : "active" })),
  updateAccuracy: (newAccuracy: number) => set({ accuracy: newAccuracy }),
  updateStatus: (newStatus: statusPlayer) => set({ status: newStatus }),
  resetStats: () => set({ accuracy: 100, health: 3, status: "active" }),
}));
