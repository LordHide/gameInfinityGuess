
import GameUI from "./GameUI";
import HintButton from "../HintComponents/HintButton";
import GuessButton from "./GuessButton";
import UnitCard from "../UnitCardComponents/UnitCard";

import '../../css/AppScreenComponents/HintButton.css';

import { AbsoluteCenter } from "@chakra-ui/react";

export function MainBody(): React.JSX.Element {
    return <>
        <div className="player-section">
            <GameUI />
            <div className="player-buttons">
                <HintButton />
                <GuessButton />
            </div>
        </div>
        <AbsoluteCenter>
            <UnitCard />
        </AbsoluteCenter>
    </>;
}

export default MainBody