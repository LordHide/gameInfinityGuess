import '../../css/TopBanner.css';
import appLogo from '../../assets/logo.png';
import HeaderDrawer from '../HeaderDrawer.tsx';
import { Heading } from "@chakra-ui/react";

export function TopBanner(state: { logo: string }): React.JSX.Element {
    return <>
        <div className='flex-header top-banner'>
            <img src={appLogo} className={`logo header-element ${state.logo}`} alt="Game logo" />
            <Heading size="4xl" className='header-element'>
                Game Mode
            </Heading >
            <HeaderDrawer />
        </div >
    </>;
}

export default TopBanner