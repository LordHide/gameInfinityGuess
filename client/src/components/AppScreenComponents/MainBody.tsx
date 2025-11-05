
import UnitCard from "../UnitCardComponents/UnitCard";
import GameUI from "./GameUI";
import GuessButton from "./GuessButton";

import '../../css/AppScreenComponents/GuessButton.css';

import { AbsoluteCenter } from "@chakra-ui/react";

export function MainBody(): React.JSX.Element {
    return <>
        <GameUI />
        <GuessButton />
        <AbsoluteCenter>
            <UnitCard />
        </AbsoluteCenter>
    </>;
}

export default MainBody