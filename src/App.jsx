import Display from "./components/structure/display"
import Settings from "./components/structure/settings"
import Footer from "./components/structure/footer"
import { Card, CardContent, CardHeader } from "./components/ui/card"
import { useState } from "react"
import { generatePassword } from "./lib/generatePassword"

function App() {
  const [length, setLength] = useState(8);
  const [checked, setChecked] = useState([true, true, true, true]);
  const [password, setPassword] = useState("");
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm dark">
      <CardHeader className="mt-2">
        <div className="text-lg">Password Generator</div>
      </CardHeader>
      <CardContent className="flex justify-between gap-4 ml-2 mr-2 mt-3 mb-3 px-0">
        <Display password={password} />
      </CardContent>
      <CardContent className="settings bg-card ml-2 mr-2 mt-3 mb-3">
        <Settings length={length} setLength={setLength} checked={checked} setChecked={setChecked} />
      </CardContent>
      <Footer generatePassword={() => setPassword(generatePassword(length, ...checked))} />
    </Card>
  )
}

export default App