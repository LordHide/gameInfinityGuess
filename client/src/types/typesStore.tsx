export type ExtraValueTypes = "None" | "Single number" | "Double number" | "Text Options";
export type StoreTypes = "skills" | "equipments" | "weapons" | "stats";
export type LoadingState = "sending" | "loading" | "pending" | "error";
export type AplyedValue = number | string | undefined;


export interface StatDataState {
    values: StatColectionValues[]
    selectedValue?: StatColectionValues
    aplyedExtraValue?: AplyedValue
    updateValues: (newValues: StatColectionValues[]) => void
    updateSelectedValue: (newSelectedValue: StatColectionValues) => void
    updateAplyedExtraValue: (newSelectedValue: AplyedValue) => void
    selectValue: (label: string) => void
}

export interface StatColectionValues {
    value?: string
    label?: string
    extraValueType?: ExtraValueTypes
    textOptions?: TextOptionsValues[]
}

export interface TextOptionsValues {
    label: string
    value: string
}

export interface ConexionStatusState {
    LoadingStatus: LoadingStatusColection
    updateLoadingStatus: (newLoadingStatus: LoadingStatusColection) => void
}

export interface LoadingStatusColection {
    stats: LoadingState
    skills: LoadingState
    equipments: LoadingState
    weapons: LoadingState
    others: LoadingState
}

export interface ProfileDataState {
    name: string
    stats: Stats
    equipments: string[]
    skills: string[]
    loadout: Loadout[]
    updateName: (newName: string) => void
    updateStats: (newStats: Stats) => void
    updateEquipment: (newEquipment: string[]) => void
    updateSkills: (newSkills: string[]) => void
    updateLoadout: (newLoadout: Loadout[]) => void
}

export interface Loadout {
    equipments: string[]
    skills: string[]
    Range_Weapons: string[]
    Melee_Weapons: string[]
}

export interface LoadoutState {
    loadout: Map<string, string[]>[]
    updateLoadout: (newLoadout: Map<string, string[]>[]) => void
}

export interface Stats {
    Mov?: string
    CC?: number
    BS?: number
    PH?: number
    WIP?: number
    ARM?: number
    BTS?: number
    VITA?: number
    S?: number
}

export type Profile = Map<string, string | Map<string, string | number> | string[]>;
export type StatsMap = Map<string, string>;

export interface ProfileState {
    name: string
    stats: StatsMap
    equipments: string[]
    skills: string[]
    loadout: LoadoutState
    updateName: (newName: string) => void
    updateStats: (newStats: StatsMap) => void
    updateEquipment: (newEquipment: string[]) => void
    updateSkills: (newSkills: string[]) => void
    updateLoadout: () => void
}