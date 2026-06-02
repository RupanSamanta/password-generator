import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { CopyIcon, Check, AlertTriangle } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"

function Display({ password, disabled, setDisabledButton }) {
    const [status, setStatus] = useState('idle');
    const copyToClipboard = () => {
        setDisabledButton(true);
        navigator.clipboard.writeText(password)
            .then(() => {
                setStatus('success');
                toast.success("Password copied to clipboard");
            })
            .catch(() => {
                setStatus('error');
                toast.error("Copy failed! Try again");
            })
            .finally(() => {
                setTimeout(() => {
                    setStatus('idle');
                    setDisabledButton(false);
                }, 3000)
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
                id="copy-button"
                onClick={copyToClipboard}
                disabled={password.length === 0 || disabled}
                className="cursor-pointer"
                title="Copy to Clipboard"
            >
                {status === "idle" && (
                    <CopyIcon className={`${iconClass} zoom-in-75`} />
                )}

                {status === "success" && (
                    <Check className={`${iconClass} zoom-in-50 text-green-500`} />
                )}

                {status === "error" && (
                    <AlertTriangle className={`${iconClass} zoom-in-50 text-red-500`} />
                )}
            </Button>
        </>
    )
}

export default Display