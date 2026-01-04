import { useDiscoveredData } from '@Stores/useDiscoveredData.tsx';

import { type ProfileState, type StatsMap } from '@/types/typesStore';

import status from "@assets/bitmap.svg"

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
                <div key={index} className={statsMap.get(label)?.className ?? ""}>
                    {statsMap.get(label)?.status != "" && <img className={statsMap.get(label)?.status} src={status} alt="status icon" />}
                    <span>{statsMap.get(label)?.value}</span>
                </div>
            ))}
        </div>
    </>;
}

export default UnitCardStats;