import '../css/HeaderDrawer.css'
import { Drawer, Button, CloseButton } from "@chakra-ui/react"

export function HeaderDrawer() {
    return <>
        <Drawer.Root>
            <Drawer.Backdrop />
            <Drawer.Trigger asChild>
                <Button className='header-element drawer' variant="outline" size="sm">
                    Open
                </Button>
            </Drawer.Trigger>
            <Drawer.Positioner>
                <Drawer.Content>
                    <Drawer.CloseTrigger asChild>
                        <CloseButton variant="ghost" />
                    </Drawer.CloseTrigger>
                    <Drawer.Header>
                        <Drawer.Title>
                            <p>Menu</p>
                        </Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>
                        <ul>
                            <li className='header-drawer-item'>
                                <Button variant="plain" size="sm">Game Mode 1</Button>
                            </li>
                            <li className='header-drawer-item'>
                                <Button variant="plain" size="sm">Game Mode 2</Button>
                            </li>
                            <li className='header-drawer-item'>
                                <Button variant="plain" size="sm">Game Mode 3</Button>
                            </li>
                            <li className='header-drawer-item'>
                                <Button variant="plain" size="sm">Game Mode 4</Button>
                            </li>
                        </ul>
                    </Drawer.Body>
                    <Drawer.Footer />
                </Drawer.Content>
            </Drawer.Positioner>
        </Drawer.Root>
    </>;
}

export default HeaderDrawer