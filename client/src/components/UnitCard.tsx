import defaultIcon from '../assets/default-icon.svg'
import '../css/UnitCard.css'

export function UnitCard() {
    return <>
        <div className="unit-card">
            <div className="unit-card-logo">
                <img src={defaultIcon} className="" alt="Default unit logo" />
            </div>
            <div className="unit-card-name">JOTUMS, Svalarheima Armoured Cuirassiers</div>
            <div className="unit-card-stats">MOV 	CC 	BS 	PH 	WIP 	ARM 	BTS 	VITA 	S </div>
            <div className="unit-card-numbers">Numbers</div>
            <div className="unit-card-equipment">Equipment</div>
            <div className="unit-card-skills">Skills</div>
            <div></div>
            <div className="unit-card-loadout">Loadout</div>
        </div>
    </>;
}

export default UnitCard