import { useDiscoveredData } from '@Stores/useDiscoveredData.tsx';

import { type ProfileState, type OptionStatus } from '@local-types/typesStore';

import '@css/UnitCardComponents/UnitCardSkills.css';

export function UnitCardSkills(): React.JSX.Element {
    const discoveredDataStore: ProfileState = useDiscoveredData();
    const skills: OptionStatus[] = discoveredDataStore.skills;

    return <div className="unit-card-skills">
        {skills.length > 0 ? <span>Skills:</span> : <></>}
        {skills.map((item: OptionStatus, index: number) => (
            <span key={index + "skills"}>{item.status + item.value}</span>
        ))}
    </div>;
}

export default UnitCardSkills;