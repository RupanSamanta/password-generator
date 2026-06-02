import { Progress } from "@/components/ui/progress"

function Strength({ strength }) {
  return (
    <div className="strength-box w-full flex justify-between flex-wrap gap-3">
      <div>Strength</div>
      <div>{strength.label}</div>
      <Progress value={2} min={1} max={6} step={1} className="p-1.5" />
    </div>
  )
}

export default Strength