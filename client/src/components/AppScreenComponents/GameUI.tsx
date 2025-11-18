import heart from '../../assets/Heart.png';
// import accuracy from '../../assets/accuracy.svg';
import crosshair from '../../assets/Crosshair.png';
import '../../css/AppScreenComponents/GameUI.css';

import { type PlayerStatsState, usePlayerStats } from '../../hooks/Stores/usePlayerStats.tsx';

export function GameUI(): React.JSX.Element {

    const playerStatsStore: PlayerStatsState = usePlayerStats();
    const arrayHealth: number[] = new Array(playerStatsStore.health);
    arrayHealth.fill(1)
    let valor = 0;

    return <div className="gameUI">
        <div className="gameUI-health" title='test'>
            {arrayHealth.map(() => (<img key={"heart" + valor++} src={heart} />))}
        </div>
        <div className="gameUI-accuracy" title='test'>
            <img src={crosshair} />
            <span className="gameUI-accuracy-text">{playerStatsStore.accuracy}%</span>
        </div>
    </div>;
}

export default GameUI