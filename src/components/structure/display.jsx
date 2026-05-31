import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { CopyIcon, Check, AlertCircle } from "lucide-react"
import { useState } from "react"

function Display({ password }) {
    const [icon, setIcon] = useState(<CopyIcon />)
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password)
            .then(() => {
                setIcon(<Check />);
            })
            .catch((err) => {
                setIcon(<AlertCircle />);
            }).finally(()=> {
                setTimeout(()=> {
                    setIcon(<CopyIcon />)
                }, 1500);
            })
    }
    return (
        <>
            <Input type="text" value={password} id="password" placeholder="Your Password Here" disabled></Input>
            <Button variant="outline" 
                    size="icon" 
                    aria-label="Copy" 
                    className="cursor-pointer" 
                    onClick={copyToClipboard}
                    disabled={password.length === 0}>
                {icon}
            </Button>
        </>
    )
}

export default Display