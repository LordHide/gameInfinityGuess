import { type ProfileState, useDiscoveredData } from '../../hooks/Stores/useDiscoveredData.tsx';

import '../../css/UnitCardComponents/UnitCardEquipment.css';


export function UnitCardEquipment(): React.JSX.Element {
    const discoveredDataStore: ProfileState = useDiscoveredData();
    const equipment: string[] = discoveredDataStore.equipments;

    return <div className="unit-card-equipment">
        {equipment.length > 0 ? <span>Equipment:</span> : <></>}
        {equipment.map((item: string, index: number) => (
            <span key={index + "equipment"}>{item}</span>
        ))}
    </div>;
}

export default UnitCardEquipment;