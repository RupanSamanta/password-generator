import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertTitle } from "../ui/alert"

function Feedback({ type, message, status }) {
  return (
    <Alert variant={type}
      className="w-fit absolute top-1/10 left-1/2 -translate-1/2 grow-in-out">
      {status === "success" && (
        <CheckCircle />
      )}
      {status === "error" && (
        <AlertCircle />
      )}
      <AlertTitle>{message}</AlertTitle>
    </Alert>
  )
}

export default Feedback
