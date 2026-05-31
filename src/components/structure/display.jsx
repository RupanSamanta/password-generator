import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { CopyIcon, Check, AlertCircle } from "lucide-react"
import { useState } from "react"
import Feedback from "./feedback"

function Display({ password }) {
    const [status, setStatus] = useState("idle")

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password)
            .then(() => {
                setStatus("success");
            })
            .catch(() => {
                setStatus("error");
            })
            .finally(() => {
                setTimeout(() => {
                    setStatus("idle");
                }, 1500)
            })
    }

    const iconClass = "transition-all animate-in duration-200 fade-in"

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
                    <CopyIcon className={`${iconClass} zoom-in-75`} />
                )}

                {status === "success" && (
                    <Check className={`${iconClass} zoom-in-50 text-green-500`} />
                )}

                {status === "error" && (
                    <AlertCircle className={`${iconClass} zoom-in-50 text-red-500`} />
                )}
            </Button>

            {status === "success" && (
                <Feedback type="default" message="Copied!" status={status} />
            )}

            {status === "error" && (
                <Feedback type="destructive" message="Copy failed" status={status} />
            )}
        </>
    )
}

export default Display