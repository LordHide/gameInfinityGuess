import heart from '@assets/Heart.png';
// import accuracy from '@assets/accuracy.svg';
import crosshair from '@assets/Crosshair.png';
import '@css/AppScreenComponents/GameUI.css';

import { type PlayerStatsState } from '@local-types/typesStore.tsx';

import { usePlayerStats } from '@Stores/usePlayerStats.tsx';

export function GameUI(): React.JSX.Element {

    const playerStatsStore: PlayerStatsState = usePlayerStats();
    const arrayHealth: number[] = new Array(playerStatsStore.previousHealth);
    const healthCounter: number = playerStatsStore.health;
    arrayHealth.fill(1)
    let valor: number = 0;

    return <div className="gameUI">
        <div className="gameUI-health">
            {arrayHealth.map((value: number, index: number) => (<img className={index < healthCounter ? "health-active" : "health-lost"} key={"heart" + valor++} src={heart} />))}
        </div>
        <div className="gameUI-accuracy">
            <img src={crosshair} />
            <span className="gameUI-accuracy-text">{playerStatsStore.accuracy}%</span>
        </div>
    </div>;
}

export default GameUI