import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { CopyIcon } from "lucide-react"

function Display() {
    return (
        <>
            <Input type="text" value="" id="password" placeholder="Your Password Here" disabled></Input>
            <Button variant="outline" size="icon" aria-label="Copy" className="cursor-pointer">
                <CopyIcon></CopyIcon>
            </Button>
        </>
    )
}

export default Display