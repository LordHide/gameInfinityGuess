import { create } from 'zustand';

import { type LoadingState, type ConexionStatusState } from '../../types/typesStore'

export const useConexionStatusProfileData = create<ConexionStatusState>((set) => ({
    LoadingStatus: "pending",
    updateLoadingStatus: (newLoadingStatus: LoadingState) => set({ LoadingStatus: newLoadingStatus })
}))