import { create } from 'zustand';

type LoadingState = "sending" | "loading" | "pending" | "error";

export interface ConexionStatusState {
    LoadingStatus: LoadingState
    updateLoadingStatus: (newLoadingStatus: LoadingState) => void
}

export const useConexionStatusProfileData = create<ConexionStatusState>((set) => ({
    LoadingStatus: "pending",
    updateLoadingStatus: (newLoadingStatus: LoadingState) => set({ LoadingStatus: newLoadingStatus })
}))