import { Dialog } from "@chakra-ui/react";


export function EndGamePanel(): React.JSX.Element {
    return <Dialog.Root>
        <Dialog.Backdrop />
        <Dialog.Positioner>
            <Dialog.Content>
                <Dialog.Body>
                    <div>End Game Panel Content</div>
                </Dialog.Body>
            </Dialog.Content>
        </Dialog.Positioner>
    </Dialog.Root>;
}

export default EndGamePanel;