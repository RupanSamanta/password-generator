import { Progress } from "@/components/ui/progress"

function Strength({ strength }) {
  const maxScore = 6;
  const score = strength.score ?? 0;
  const progressValue = (score / maxScore) * 100;

  return (
    <div className="strength-box w-full flex justify-between flex-wrap gap-3">
      <div>Strength</div>
      <div>{strength.label ?? "Empty"}</div>
      <Progress value={progressValue} className="h-2" />
    </div>
  )
}

export default Strength
