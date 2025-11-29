import { useProfileData } from '@Stores/useProfileData.tsx';
import { type ProfileData } from './useAnonymizeProfileData.tsx';

import { type ProfileDataState } from '@local-types/typesStore.tsx'

export function useInitProfileData(): (jsonData: ProfileData) => void {

    const ProfileDataStore: ProfileDataState = useProfileData();

    return (jsonData: ProfileData) => {
        ProfileDataStore.updateName(jsonData.name);
        ProfileDataStore.updateStats(jsonData.stats);
        ProfileDataStore.updateEquipment(jsonData.equipments);
        ProfileDataStore.updateSkills(jsonData.skills);
        ProfileDataStore.updateLoadout(jsonData.loadouts);
    };
}

export default useInitProfileData;