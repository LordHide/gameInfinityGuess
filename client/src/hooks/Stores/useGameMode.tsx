import { create } from 'zustand';

type GameMode = "basic" | "chaleng" | "ironMan" | "";

export interface GameModeState {
    gameMode: GameMode
    updateGameMode: (newGameMode: GameMode) => void
}

export const useGameMode = create<GameModeState>((set) => ({
    gameMode: "",
    updateGameMode: (newGameMode: GameMode) => set({ gameMode: newGameMode }),
}))