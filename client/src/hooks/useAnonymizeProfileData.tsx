import { type Stats, type Loadout } from './Stores/useProfileData.tsx';

export interface ProfileData {
    name: string;
    stats: Stats;
    equipment: string[];
    skills: string[];
    loadouts: Loadout[];
}

export type DiscoveredData = [string, Map<string, string>, string[], string[], Map<string, string[]>[]];

export function useAnonymizeProfileData(jsonObject: ProfileData): DiscoveredData {
    let loadoutMapArray: Map<string, string[]>[] = [];
    let statsMap: Map<string, string> = new Map<string, string>();
    let equipmentArray: string[] = [];
    let skillsArray: string[] = [];

    for (const loadoutColection of jsonObject?.loadouts) {
        let loadoutMap: Map<string, string[]> = new Map<string, string[]>();
        for (const key in loadoutColection) {
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
        statsMap.set(key, "??");
    }

    for (const key in jsonObject.equipment) {
        equipmentArray.push("??????????");
    }

    for (const key in jsonObject.skills) {
        skillsArray.push("??????????");
    }

    return ["???????????????????????????????????", statsMap, equipmentArray, skillsArray, loadoutMapArray];
}

export default useAnonymizeProfileData;