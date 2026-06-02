import { Progress } from "@/components/ui/progress"

function Strength({ strength }) {
  const maxScore = 6;
  const score = strength.score ?? 0;
  const progressValue = (score / maxScore) * 100;
  const colors = ['#d32f2f', '#f57c00', '#fbc02d', '#388e3c', '#2e7d32', '#1b5e20'];
  const colorIndex = Math.min(Math.max(score - 1, 0), colors.length - 1);
  const progressColor = colors[colorIndex];


  return (
    <div className="strength-box w-full flex justify-between flex-wrap gap-3">
      <div>Strength</div>
      <div>{strength.label ?? "Empty"}</div>
      <Progress
        value={progressValue}
        className="h-2 **:data-[slot=progress-indicator]:bg-(--strength-color)"
        style={{ "--strength-color": progressColor }}
      />
    </div>
  )
}

export default Strength
