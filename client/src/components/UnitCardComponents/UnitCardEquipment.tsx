import { useDiscoveredData } from '@Stores/useDiscoveredData.tsx';

import { type ProfileState, type OptionStatus } from '@local-types/typesStore';

import '@css/UnitCardComponents/UnitCardEquipment.css';


export function UnitCardEquipment(): React.JSX.Element {
    const discoveredDataStore: ProfileState = useDiscoveredData();
    const equipment: OptionStatus[] = discoveredDataStore.equipments;

    return <div className="unit-card-equipment">
        {equipment.length > 0 ? <span>Equipment:</span> : <></>}
        {equipment.map((item: OptionStatus, index: number) => (
            <span key={index + "equipment"}>{item.status + item.value}</span>
        ))}
    </div>;
}

export default UnitCardEquipment;