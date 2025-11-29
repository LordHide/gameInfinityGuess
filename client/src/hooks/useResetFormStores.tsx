import { useSkills } from '@Stores/useSkills.tsx';
import { useStats } from '@Stores/useStats.tsx';
import { useEquipment } from '@Stores/useEquipment.tsx';
import { useWeapons } from '@Stores/useWeapons.tsx';
import { useNameList } from '@Stores/useNameList.tsx';

export function useResetFormStores(): () => void {
    const skillsStore = useSkills();
    const statsStore = useStats();
    const equipmentStore = useEquipment();
    const weaponssStore = useWeapons();
    const nameStore = useNameList();

    return () => {
        skillsStore.updateSelectedValue({});
        statsStore.updateSelectedValue({});
        equipmentStore.updateSelectedValue({});
        weaponssStore.updateSelectedValue({});
        nameStore.updateSelectedValue({});
    }
}

export default useResetFormStores;