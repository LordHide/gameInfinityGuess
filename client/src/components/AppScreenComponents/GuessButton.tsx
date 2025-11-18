
import { Dialog, Button, CloseButton, Portal } from "@chakra-ui/react"

export function GuessButton(): React.JSX.Element {

    return <div className="hint-button">
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button variant="outline" size="lg" className="GuessButton" >
                    Guess Name
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Body>
                        </Dialog.Body>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="2xs" variant="ghost" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    </div>;
}

export default GuessButton