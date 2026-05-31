import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { CopyIcon, Check, AlertCircle } from "lucide-react"
import { useState } from "react"

function Display({ password }) {
    const [status, setStatus] = useState("idle")

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password)
            .then(() => {
                setStatus("success")
            })
            .catch(() => {
                setStatus("error")
            })
            .finally(() => {
                setTimeout(() => {
                    setStatus("idle")
                }, 1500)
            })
    }

    const iconClass = "size-4 transition-all duration-200"

    return (
        <>
            <Input
                type="text"
                value={password}
                id="password"
                placeholder="Your Password Here"
                disabled
            />

            <Button
                variant="outline"
                size="icon"
                aria-label="Copy"
                className="cursor-pointer"
                onClick={copyToClipboard}
                disabled={password.length === 0}
            >
                {status === "idle" && (
                    <CopyIcon className={`${iconClass} animate-in zoom-in-75 fade-in`} />
                )}

                {status === "success" && (
                    <Check className={`${iconClass} animate-in zoom-in-50 fade-in text-green-500`} />
                )}

                {status === "error" && (
                    <AlertCircle className={`${iconClass} animate-in zoom-in-50 fade-in text-red-500`} />
                )}
            </Button>
        </>
    )
}

export default Display