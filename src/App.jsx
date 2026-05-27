import { CopyIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Slider } from "./components/ui/slider"
import { Field, FieldLabel } from "./components/ui/field"
import { Checkbox } from "./components/ui/checkbox"

function App() {
  
  const [length, setLength] = useState(8);

  return (
    <Card size="sm" className="mx-auto w-full max-w-sm dark">
      <CardHeader className="mt-2">
        <div className="text-lg">Password Generator</div>
      </CardHeader>
      <CardContent className="flex justify-between gap-4 ml-2 mr-2 mt-3 mb-3 px-0">
        <Input type="text" value="" id="password" placeholder="Your Password Here" disabled></Input>
        <Button variant="outline" size="icon" aria-label="Copy" className="cursor-pointer">
          <CopyIcon></CopyIcon>
        </Button>
      </CardContent>
      <CardContent className="settings bg-card ml-2 mr-2 mt-3 mb-3">
        <div className="character-setting w-full flex justify-between flex-wrap gap-3">
          <div>Length</div>
          <div id="length">{length}</div>
          <Slider value={[length]} min={4} max={32} step={1} onValueChange={(v) => setLength(v[0])} className="grow cursor-grab active:cursor-grabbing" />
        </div>
        <div className="format-setting w-full flex flex-wrap justify-between gap-y-4 mt-6">
          {
            ['uppercase', 'lowercase', 'numbers', 'symbols']
              .map((e, i) => {
                return (<Field orientation="horizontal" key={i} className="max-w-1/2">
                  <Checkbox id={e} name={e + "-check"} defaultChecked className="cursor-pointer"></Checkbox>
                  <FieldLabel htmlFor={e} className="capitalize">{e}</FieldLabel>
                </Field>)
              })
          }
        </div>
      </CardContent>
      <CardContent>
        <Button variant="outline" aria-label="Generate" className="w-full cursor-pointer  p-4.5">Generate</Button>
      </CardContent>
    </Card>
  )
}

export default App