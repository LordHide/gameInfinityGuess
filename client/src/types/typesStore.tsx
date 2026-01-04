export type ExtraValueTypes =
  | "None"
  | "Single number"
  | "Double number"
  | "Text Options";
export type StoreTypes = "skills" | "equipments" | "weapons" | "stats";
export type LoadingState = "sending" | "loading" | "pending" | "error";
export type statusPlayer = "active" | "defeated" | "win";
export type OptionStatusStates = "higher" | "much-higher" | "smaller" | "much-smaller" | "";
export type OptionStatusClassName = "failed" | "succes" | "";
export type AplyedValue = string | undefined;

export interface StatDataState {
  values: StatColectionValues[];
  selectedValue?: StatColectionValues;
  aplyedExtraValue?: AplyedValue;
  updateValues: (newValues: StatColectionValues[]) => void;
  updateSelectedValue: (newSelectedValue: StatColectionValues) => void;
  updateAplyedExtraValue: (newSelectedValue: AplyedValue) => void;
  selectValue: (label: string) => void;
}

export interface StatColectionValues {
  value?: string;
  label?: string;
  extraValueType?: ExtraValueTypes;
  textOptions?: TextOptionsValues[];
}

export interface TextOptionsValues {
  label: string;
  value: string;
}

export interface ConexionStatusColectionState {
  LoadingStatus: LoadingStatusColection;
  updateLoadingStatus: (newLoadingStatus: LoadingStatusColection) => void;
}

export interface ConexionStatusState {
  LoadingStatus: LoadingState;
  updateLoadingStatus: (newLoadingStatus: LoadingState) => void;
}

export interface LoadingStatusColection {
  stats: LoadingState;
  skills: LoadingState;
  equipments: LoadingState;
  weapons: LoadingState;
  others: LoadingState;
}

export interface ProfileDataState {
  name: string;
  stats: Stats;
  equipments: OptionStatus[];
  skills: OptionStatus[];
  loadout: Loadout[];
  updateName: (newName: string) => void;
  updateStats: (newStats: Stats) => void;
  updateEquipment: (newEquipment: OptionStatus[]) => void;
  updateSkills: (newSkills: OptionStatus[]) => void;
  updateLoadout: (newLoadout: Loadout[]) => void;
}

export interface Loadout {
  equipments: string[];
  skills: string[];
  Range_Weapons: string[];
  Melee_Weapons: string[];
}

export interface LoadoutState {
  loadout: Map<string, string[]>[];
  updateLoadout: (newLoadout: Map<string, string[]>[]) => void;
}

export interface Stats {
  Mov: OptionStatus;
  CC: OptionStatus;
  BS: OptionStatus;
  PH: OptionStatus;
  WIP: OptionStatus;
  ARM: OptionStatus;
  BTS: OptionStatus;
  VITA: OptionStatus;
  S: OptionStatus;
}

export type Profile = Map<
  string,
  string | Map<string, string | number> | string[]
>;
export type StatsMap = Map<string, OptionStatus>;

export interface ProfileState {
  name: string;
  stats: StatsMap;
  equipments: OptionStatus[];
  skills: OptionStatus[];
  loadout: LoadoutState;
  updateName: (newName: string) => void;
  updateStats: (newStats: StatsMap) => void;
  updateEquipment: (newEquipment: OptionStatus[]) => void;
  updateSkills: (newSkills: OptionStatus[]) => void;
  getStatsOptionStatus: (
    originalValue: string,
    enteringValue: string
  ) => OptionStatus;
  getItemOptionStatus: (
    originalValue: string,
    enteringValue: string
  ) => OptionStatus;
  updateLoadout: () => void;
}

export interface OptionStatus {
  value: string;
  status: OptionStatusStates;
  className?: OptionStatusClassName;
}


export interface PlayerStatsState {
  health: number;
  previousHealth: number;
  accuracy: number;
  status: statusPlayer;
  updateHealth: (newHealth: number) => void;
  updatePreviousHealth: () => void;
  updateAccuracy: (newAccuracy: number) => void;
  updateStatus: (newStatus: statusPlayer) => void;
  loseHealth: (amount: number) => void;
  gainHealth: (amount: number) => void;
  checkPlayerIsDead: () => void;
  resetStats: () => void;
}
