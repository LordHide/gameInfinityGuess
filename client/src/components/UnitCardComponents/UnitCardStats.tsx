import { useDiscoveredData } from '@Stores/useDiscoveredData.tsx';

import { type ProfileState, type StatsMap } from '@/types/typesStore';


import '@css/UnitCardComponents/UnitCardStats.css';

export function UnitCardStats() {
    const discoveredDataStore: ProfileState = useDiscoveredData();
    const statsMap: StatsMap = discoveredDataStore.stats;
    const labels: string[] = statsMap ? Array.from(statsMap.keys()) : [];

    return <>
        <div className="unit-card-stats">
            {labels.map((label, index) => (
                <div key={index}>{label}</div>
            ))}
            {labels.map((label, index) => (
                <div key={index} className={statsMap.get(label)?.className ?? ""}>{(statsMap.get(label)?.status ?? "") + statsMap.get(label)?.value}</div>
            ))}
        </div>
    </>;
}

export default UnitCardStats;