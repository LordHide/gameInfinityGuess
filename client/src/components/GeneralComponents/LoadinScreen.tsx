import appLogo from '../../assets/logo.png'
import { AbsoluteCenter } from "@chakra-ui/react";

import '../../css/GeneralComponents/LoadinScreen.css'

export function LoadinScreen() {

    return <>
        <AbsoluteCenter>
            <div>
                <img className='loading-logo' src={appLogo} alt="Game logo" />
                <div className='loading-text'>Loading<span>.</span><span>.</span><span>.</span></div>
            </div >
        </AbsoluteCenter>
    </>;
}

export default LoadinScreen