import { type ProfileState, useDiscoveredData } from '../../hooks/Stores/useDiscoveredData.tsx';

import '../../css/UnitCardComponents/UnitCardSkills.css';

export function UnitCardSkills(): React.JSX.Element {
    const discoveredDataStore: ProfileState = useDiscoveredData();
    const skills: string[] = discoveredDataStore.skills;

    return <div className="unit-card-skills">
        {skills.length > 0 ? <span>Skills:</span> : <></>}
        {skills.map((item: string, index: number) => (
            <span key={index + "skills"}>{item}</span>
        ))}
    </div>;
}

export default UnitCardSkills;