import { type DiscoveredData, type ProfileData, useAnonymizeProfileData } from './useAnonymizeProfileData.tsx';
import { useDiscoveredData } from '@Stores/useDiscoveredData.tsx';
import { useLoadout } from '@Stores/useLoadout.tsx';

import { type ProfileState, type LoadoutState } from '@local-types/typesStore.tsx'

export function useInitDiscoveredData(): (jsonData: ProfileData) => void {

    const discoveredDataStore: ProfileState = useDiscoveredData();
    const loadoutDataStore: LoadoutState = useLoadout();

    return (jsonData: ProfileData) => {
        let [discobereName, discobereStatsMap, equipmentArray, skillsArray, loadoutMap]: DiscoveredData = useAnonymizeProfileData(jsonData);

        discoveredDataStore.updateName(discobereName);
        discoveredDataStore.updateStats(discobereStatsMap);
        discoveredDataStore.updateEquipment(equipmentArray);
        discoveredDataStore.updateSkills(skillsArray);
        loadoutDataStore.updateLoadout(loadoutMap);
    };
}

export default useInitDiscoveredData;