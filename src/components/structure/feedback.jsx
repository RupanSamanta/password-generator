import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertTitle } from "../ui/alert"

function Feedback({ type, message, status }) {
  return (
    <Alert variant={type} 
           className="w-fit absolute top-1/7 left-1/2 -translate-1/2 transition-all animate-in duration-200 zoom-in-50 fade-in">
        {status === "success" && (
            <CheckCircle />
        )}
        {status === "error" && (
            <AlertCircle />
        )}
        <AlertTitle>{ message }</AlertTitle>
    </Alert>
  )
}

export default Feedback