import { type Stats, type Loadout, type OptionStatus } from '@local-types/typesStore.tsx'

export interface ProfileData {
    name: string;
    stats: Stats;
    equipments: OptionStatus[];
    skills: OptionStatus[];
    loadouts: Loadout[];
}

export type DiscoveredData = [string, Map<string, OptionStatus>, OptionStatus[], OptionStatus[], Map<string, string[]>[]];

export function useAnonymizeProfileData(jsonObject: ProfileData): DiscoveredData {
    let loadoutMapArray: Map<string, string[]>[] = [];
    let statsMap: Map<string, OptionStatus> = new Map<string, OptionStatus>();
    let equipmentArray: OptionStatus[] = [];
    let skillsArray: OptionStatus[] = [];
    const keys: (keyof Loadout)[] = ["skills", "equipments", "Range_Weapons", "Melee_Weapons"];

    for (const loadoutColection of jsonObject?.loadouts) {
        let loadoutMap: Map<string, string[]> = new Map<string, string[]>();
        for (const key of keys) {
            let loadoutSection: string[] = loadoutColection[key as keyof Loadout] as string[];
            let anonymizeSection: string[] = [];
            for (const loadoutitem of loadoutSection) {
                anonymizeSection.push("??????????");
            }
            loadoutMap.set(key, anonymizeSection);
        }
        loadoutMapArray.push(loadoutMap);
    }

    for (const key in jsonObject.stats) {
        statsMap.set(key, { value: "??", status: "" });
    }

    for (const key in jsonObject.equipments) {
        equipmentArray.push({ value: "??????????", status: "" });
    }

    for (const key in jsonObject.skills) {
        skillsArray.push({ value: "??????????", status: "" });
    }

    return ["???????????????????????????????????", statsMap, equipmentArray, skillsArray, loadoutMapArray];
}

export default useAnonymizeProfileData;