import { type StatDataState } from '@local-types/typesStore.tsx'
import { useSkills } from '@Stores/useSkills.tsx';

export function useCheckStasData(): boolean {

    const skillsStore: StatDataState = useSkills();

    return skillsStore.values.length > 0;
}

export default useCheckStasData;