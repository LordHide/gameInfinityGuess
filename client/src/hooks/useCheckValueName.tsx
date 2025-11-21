import { type StatDataState, type ProfileDataState, type ProfileState, type Stats, type StatsMap, type LoadoutState, type Loadout, type PlayerStatsState } from '../types/typesStore.tsx'

import { useProfileData } from './Stores/useProfileData.tsx';
import { useDiscoveredData } from './Stores/useDiscoveredData.tsx';
import { useNameList } from "./Stores/useNameList.tsx";
import { useLoadout } from "./Stores/useLoadout.tsx";
import { usePlayerStats } from './Stores/usePlayerStats.tsx';


export function useCheckValueName(): () => void {

    const profileStore: ProfileDataState = useProfileData();
    const dicoveredStore: ProfileState = useDiscoveredData();
    const playerStatsStore: PlayerStatsState = usePlayerStats();
    const loadoutDataStore: LoadoutState = useLoadout();

    const nameListStore: StatDataState = useNameList();
    const aplyedExtraValue: string = nameListStore.selectedValue?.value as string;

    const functCheckStats: () => void = () => {
        if (profileStore.name != aplyedExtraValue) {
            const currentHealth: number = playerStatsStore.health;
            const currentAccuracy: number = playerStatsStore.accuracy;
            if (currentHealth > 0)
                playerStatsStore.updateHealth(currentHealth - 1);
            if (currentAccuracy > 0)
                playerStatsStore.updateAccuracy(currentAccuracy - 20);
        }
        if (profileStore.name == aplyedExtraValue) {
            const fullStats: Stats = profileStore.stats;
            const fullSKills: string[] = profileStore.skills;
            const fullEquipments: string[] = profileStore.equipments;
            const fullLoadout: Loadout[] = profileStore.loadout;
            const updatedStats: StatsMap = new Map();
            const updatedLoadout: Map<string, string[]>[] = [];

            for (const [key, value] of Object.entries(fullStats)) {
                updatedStats.set(key, value);
            }

            fullLoadout.forEach((currentValue) => {
                const loadoutMap: Map<string, string[]> = new Map();
                loadoutMap.set("equipments", currentValue.equipments);
                loadoutMap.set("skills", currentValue.skills);
                loadoutMap.set("Range_Weapons", currentValue.Range_Weapons);
                loadoutMap.set("Melee_Weapons", currentValue.Melee_Weapons);
                updatedLoadout.push(loadoutMap);
            });

            dicoveredStore.updateStats(updatedStats);
            dicoveredStore.updateSkills(fullSKills);
            dicoveredStore.updateEquipment(fullEquipments);
            loadoutDataStore.updateLoadout(updatedLoadout);
            dicoveredStore.updateName(aplyedExtraValue as string);
        }
    }

    return () => {
        functCheckStats()
    }

}

export default useCheckValueName;