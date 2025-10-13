import ProfileDataContext from '../../context/ProfileDataContext.tsx';

import { useContext } from 'react'

import '../../css/UnitCard.css'

export function UnitCardName() {
    const [profileData, setProfileData] = useContext(ProfileDataContext);

    return <div className="unit-card-name">{profileData.name}</div>;
}

export default UnitCardName;