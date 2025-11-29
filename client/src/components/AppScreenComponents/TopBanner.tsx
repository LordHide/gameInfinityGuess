import '@css/TopBanner.css';
import appLogo from '@assets/logo.png';
import HeaderDrawer from '../HeaderDrawer.tsx';
import { Heading } from "@chakra-ui/react";

import { type GameModeState, useGameMode } from '@Stores/useGameMode.tsx';

export function TopBanner(state: { logo: string }): React.JSX.Element {

    const gameModeStore: GameModeState = useGameMode();

    let titleText: string = "Game Mode";

    switch (gameModeStore.gameMode) {
        case "basic":
            titleText = "Regular Mode";
            break;
        default:
            titleText = "Game Mode";
            break;
    }

    return <>
        <div className='flex-header top-banner'>
            <img src={appLogo} className={`logo header-element ${state.logo}`} alt="Game logo" />
            <Heading size="4xl" className='header-element'>
                {titleText}
            </Heading >
            <HeaderDrawer />
        </div >
    </>;
}

export default TopBanner