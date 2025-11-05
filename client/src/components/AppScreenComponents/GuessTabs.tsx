import { Tabs } from "@chakra-ui/react"

import GuessForm from './GuessForm.tsx';

export function GuessTabs(): React.JSX.Element {

    return <Tabs.Root defaultValue="members">
        <Tabs.List>
            <Tabs.Trigger value="stats">
                Stats
            </Tabs.Trigger>
            <Tabs.Trigger value="skills">
                Skills
            </Tabs.Trigger>
            <Tabs.Trigger value="equipments">
                Equipments
            </Tabs.Trigger>
            <Tabs.Trigger value="weapons">
                Weapons
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="stats">
            <GuessForm typeStore={"stats"} />
        </Tabs.Content>
        <Tabs.Content value="skills">
            <GuessForm typeStore={"skills"} />
        </Tabs.Content>
        <Tabs.Content value="equipments">
            <GuessForm typeStore={"equipments"} />
        </Tabs.Content>
        <Tabs.Content value="weapons">
            <GuessForm typeStore={"weapons"} />
        </Tabs.Content>
    </Tabs.Root>;
}

export default GuessTabs