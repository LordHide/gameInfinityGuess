import { useState, useEffect } from 'react';

import TopBanner from '../AppScreenComponents/TopBanner.tsx';
import MainBody from '../AppScreenComponents/MainBody.tsx';
import Mockup from '../AppScreenComponents/Mockup.tsx';

import '@css/GeneralComponents/LoadinScreen.css';

export function GameScreen(): React.JSX.Element {

    const [isFirstInit, setIsFirstInit] = useState(true);

    useEffect(() => {
        if (isFirstInit == true) {
            setTimeout(() => {
                setIsFirstInit(false);
            }, 1000);
        }
    }, [isFirstInit, "errorMesage"]
    );

    return <>
        {isFirstInit && <Mockup />}
        {!isFirstInit && <><TopBanner logo={"regular"} /><MainBody /></>}
    </>;
}

export default GameScreen