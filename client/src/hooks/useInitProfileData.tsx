import { type ProfileDataState, useProfileData } from './Stores/useProfileData.tsx';
import { type ProfileData } from './useAnonymizeProfileData.tsx';

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