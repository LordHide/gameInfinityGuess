import '../../css/UnitCardComponents/UnitCard.css';

import defaultIcon from '../../assets/default-icon.svg';

export function UnitCardLogo(): React.JSX.Element {
    return <div className="unit-card-logo">
        <img src={defaultIcon} className="" alt="Default unit logo" />
    </div>;
}

export default UnitCardLogo;