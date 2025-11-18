import { Tabs } from "@chakra-ui/react"

import HintForm from './HintForm.tsx';

export function HintTabs(): React.JSX.Element {

    return <Tabs.Root defaultValue="stats" variant="outline">
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
            <HintForm typeStore={"stats"} />
        </Tabs.Content>
        <Tabs.Content value="skills">
            <HintForm typeStore={"skills"} />
        </Tabs.Content>
        <Tabs.Content value="equipments">
            <HintForm typeStore={"equipments"} />
        </Tabs.Content>
        <Tabs.Content value="weapons">
            <HintForm typeStore={"weapons"} />
        </Tabs.Content>
    </Tabs.Root>;
}

export default HintTabs