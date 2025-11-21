import { type StatDataState } from '../types/typesStore.tsx'
import { useNameList } from './Stores/useNameList.tsx';

export function useCheckNamesData(): boolean {

    const nameStore: StatDataState = useNameList();

    return nameStore.values.length > 0;
}

export default useCheckNamesData;