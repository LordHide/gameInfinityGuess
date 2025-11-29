import { useSkills } from '@Stores/useSkills.tsx';
import { useStats } from '@Stores/useStats.tsx';
import { useEquipment } from '@Stores/useEquipment.tsx';
import { useWeapons } from '@Stores/useWeapons.tsx';

import { type StatDataState, type StoreTypes } from '@local-types/typesStore'

export function useActiveFormStore(storeType: StoreTypes): StatDataState {

    const skillsStore = useSkills() as StatDataState;
    const EquipmentStore = useEquipment() as StatDataState;
    const WeaponsStore = useWeapons() as StatDataState;
    const StatsStore = useStats() as StatDataState;

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