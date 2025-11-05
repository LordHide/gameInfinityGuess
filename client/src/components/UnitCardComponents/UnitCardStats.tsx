import { type Stats, type ProfileState, useDiscoveredData } from '../../hooks/Stores/useDiscoveredData.tsx';


import '../../css/UnitCardComponents/UnitCardStats.css';

export function UnitCardStats() {
    const discoveredDataStore: ProfileState = useDiscoveredData();
    const statsMap: Stats = discoveredDataStore.stats;
    const labels: string[] = statsMap ? Array.from(statsMap.keys()) : [];

    return <>
        <div className="unit-card-stats">
            {labels.map((label, index) => (
                <div key={index}>{label}</div>
            ))}
            {labels.map((label, index) => (
                <div key={index}>{statsMap.get(label)}</div>
            ))}
        </div>
    </>;
}

export default UnitCardStats;