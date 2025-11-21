import { create } from 'zustand';

import { type ConexionStatusColectionState, type LoadingStatusColection } from '../../types/typesStore'

const baseLoadingStatus: LoadingStatusColection = {
    stats: "pending",
    skills: "pending",
    equipments: "pending",
    weapons: "pending",
    others: "pending",
}

export const useConexionStatusStatsStoreData = create<ConexionStatusColectionState>((set) => ({
    LoadingStatus: baseLoadingStatus,
    updateLoadingStatus: (newLoadingStatus: LoadingStatusColection) => set({ LoadingStatus: newLoadingStatus }),
}))