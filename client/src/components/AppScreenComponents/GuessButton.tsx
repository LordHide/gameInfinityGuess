
import { Dialog, Button, CloseButton, Portal } from "@chakra-ui/react"

import GuessTabs from './GuessTabs.tsx';

export function GuessButton(): React.JSX.Element {

    return <div className="GuessButtonContainer">
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button variant="outline" size="md" className="GuessButton">
                    Make Guess
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Body>
                            <GuessTabs />
                        </Dialog.Body>
                        <Dialog.Footer>

                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    </div>;
}

export default GuessButton