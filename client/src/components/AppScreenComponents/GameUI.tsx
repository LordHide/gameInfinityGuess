import health from '../../assets/health.svg';
import accuracy from '../../assets/accuracy.svg';
import '../../css/AppScreenComponents/GameUI.css';

import { type PlayerStatsState, usePlayerStats } from '../../hooks/Stores/usePlayerStats.tsx';

export function GameUI(): React.JSX.Element {

    const playerStatsStore: PlayerStatsState = usePlayerStats();

    return <div className="gameUI">
        <div className="gameUI-health" title='test'>
            <img src={health} />
            <span className="gameUI-health-text">{playerStatsStore.health}</span>
        </div>
        <div className="gameUI-accuracy" title='test'>
            <img src={accuracy} />
            <span className="gameUI-accuracy-text">{playerStatsStore.accuracy}%</span>
        </div>
    </div>;
}

export default GameUI