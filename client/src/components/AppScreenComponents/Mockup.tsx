import appLogo from '../../assets/logo.png';
import { AbsoluteCenter } from "@chakra-ui/react";

import TopBanner from './TopBanner.tsx';
import MainBody from './MainBody.tsx';

import '../../css/GeneralComponents/LoadinScreen.css';
import '../../css/GeneralComponents/Mocup.css';

export function Mockup(): React.JSX.Element {

    return <>
        <div className='mockup-background'>
            <AbsoluteCenter>
                <div>
                    <img className='loading-logo fake' src={appLogo} alt="Game logo" />
                    <div className='loading-text fake'>Loading<span>.</span><span>.</span><span>.</span></div>
                </div >
            </AbsoluteCenter>
        </div>
        <><TopBanner logo={"mockup"} /><MainBody /></>
    </>;
}

export default Mockup