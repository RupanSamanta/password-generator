import { Button } from "../ui/button"
import { CardContent } from "../ui/card"

function Footer({ generatePassword, disabled }) {
    return (
        <CardContent>
            <Button size="lg"
                variant="outline"
                aria-label="Generate"
                className="w-full cursor-pointer"
                disabled={disabled}
                onClick={generatePassword}>Generate</Button>
        </CardContent>
    )
}

export default Footer