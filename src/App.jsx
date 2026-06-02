import Display from "./components/structure/display"
import Settings from "./components/structure/settings"
import Footer from "./components/structure/footer"
import Strength from "./components/structure/strength"
import { useState } from "react"
import { Card, CardContent, CardHeader } from "./components/ui/card"
import { generatePassword } from "./lib/generatePassword"
import { checkPasswordStrength } from "./lib/checkPasswordStrength"

function App() {
  const [length, setLength] = useState(8);
  const [checked, setChecked] = useState([true, true, true, true]);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({ score: 0, label: "Empty" });
  return (
    <Card size="sm" className="w-full max-w-sm mx-auto dark">
      <CardHeader className="mt-2">
        <div className="text-lg">Password Generator</div>
      </CardHeader>
      <CardContent className="flex justify-between gap-4 mx-2 my-3 px-0">
        <Display password={password} />
      </CardContent>
      <CardContent className="settings bg-card m-2">
        <Settings length={length} setLength={setLength} checked={checked} setChecked={setChecked} />
      </CardContent>
      <CardContent className="mx-2 my-3 mt-0">
        <Strength strength={strength}/>
      </CardContent>
      <Footer generatePassword={ () => {
          const nextPassword = generatePassword(length, ...checked);
          setPassword(nextPassword);
          setStrength(checkPasswordStrength(nextPassword));
      }} />
    </Card>
  )
}

export default App
