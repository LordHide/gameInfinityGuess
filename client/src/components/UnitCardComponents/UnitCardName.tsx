import { type ProfileState, useDiscoveredData } from '../../hooks/Stores/useDiscoveredData.tsx';

import '../../css/UnitCardComponents/UnitCardName.css';


export function UnitCardName(): React.JSX.Element {
    const discoveredDataStore: ProfileState = useDiscoveredData();

    return <div className="unit-card-name">{discoveredDataStore.name}</div>;
}

export default UnitCardName;