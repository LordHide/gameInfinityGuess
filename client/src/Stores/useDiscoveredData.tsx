import { create } from "zustand";
import { useLoadout } from "./useLoadout.tsx";

import {
  type ProfileState,
  type StatsMap,
  type OptionStatus,
  type OptionStatusStates,
  type OptionStatusClassName,
} from "@local-types/typesStore";

const functCheckStatuas = (
  originalValue: string,
  enteringValue: string,
  status: OptionStatusStates[],
  className: OptionStatusClassName[]
) => {
  if (originalValue === enteringValue) {
    status.push("");
    className.push("succes");
  } else if (Number(enteringValue) > Number(originalValue)) {
    status.push("higher");
    className.push("failed");
  } else if (Number(enteringValue) < Number(originalValue)) {
    status.push("smaller");
    className.push("failed");
  }
  return { status: status, className: className };
};

export const useDiscoveredData = create<ProfileState>((set) => ({
  name: "",
  stats: new Map<string, OptionStatus>(),
  equipments: [],
  skills: [],
  loadout: useLoadout.getState(),
  updateName: (newName: string) => set({ name: newName }),
  updateStats: (newStats: StatsMap) => set({ stats: newStats }),
  updateEquipment: (newEquipment: OptionStatus[]) =>
    set({ equipments: newEquipment }),
  updateSkills: (newSkills: OptionStatus[]) => set({ skills: newSkills }),
  updateLoadout: () => set({ loadout: useLoadout.getState() }),
  getStatsOptionStatus: (
    originalValue: string,
    enteringValue: string
  ): OptionStatus => {
    let status: OptionStatusStates[] = [];
    let className: OptionStatusClassName[] = [];
    let newStatus = functCheckStatuas(
      originalValue,
      enteringValue,
      status,
      className
    );
    return {
      value: enteringValue,
      status: newStatus["status"],
      className: newStatus["className"],
    };
  },
  getItemOptionStatus: (
    originalValue: string,
    enteringValue: string
  ): OptionStatus => {
    let status: OptionStatusStates[] = [];
    let className: OptionStatusClassName[] = [];
    let newStatus = functCheckStatuas(
      originalValue,
      enteringValue,
      status,
      className
    );
    return {
      value: enteringValue,
      status: newStatus["status"],
      className: newStatus["className"],
    };
  },
}));
