import ProfileDataContext from '../../context/ProfileDataContext.tsx';

import { useContext } from 'react'

import '../../css/UnitCardComponents/UnitCardStats.css'

export function UnitCardStats() {
    const [profileData, setProfileData] = useContext(ProfileDataContext);

    return <>
        <div className="unit-card-stats">
            <div>MOV</div><div>CC</div><div>BS</div><div>PH</div><div>WIP</div><div>ARM</div><div>BTS</div><div>VITA</div><div>S</div>
            {/* <div>??</div><div>??</div><div>??</div><div>??</div><div>??</div><div>??</div><div>??</div><div>??</div><div>??</div> */}
            {profileData.stats.map((stat: string | number) => {
                return <div>{stat}</div>
            })}
        </div>
    </>;
}

export default UnitCardStats;