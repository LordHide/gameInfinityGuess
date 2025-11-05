import { type ProfileDataState, useSkills } from './Stores/useSkills.tsx';
import { useStats } from './Stores/useStats.tsx';
import { useEquipment } from './Stores/useEquipment.tsx';
import { useWeapons } from './Stores/useWeapons.tsx';

export type StoreTypes = "skills" | "equipments" | "weapons" | "stats";

export function useActiveFormStore(storeType: StoreTypes): ProfileDataState {

    const skillsStore = useSkills() as ProfileDataState;
    const EquipmentStore = useEquipment() as ProfileDataState;
    const WeaponsStore = useWeapons() as ProfileDataState;
    const StatsStore = useStats() as ProfileDataState;

    let returnStore = null

    switch (storeType) {
        case "skills":
            returnStore = skillsStore;
            break;
        case "equipments":
            returnStore = EquipmentStore;
            break;
        case "weapons":
            returnStore = WeaponsStore;
            break;
        default:
            returnStore = StatsStore;
            break;
    }

    return returnStore;
}

export default useActiveFormStore;