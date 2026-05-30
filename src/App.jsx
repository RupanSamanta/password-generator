import Display from "./components/structure/display"
import Settings from "./components/structure/settings"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader } from "./components/ui/card"

function App() {
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm dark">
      <CardHeader className="mt-2">
        <div className="text-lg">Password Generator</div>
      </CardHeader>
      <CardContent className="flex justify-between gap-4 ml-2 mr-2 mt-3 mb-3 px-0">
        <Display></Display>
      </CardContent>
      <CardContent className="settings bg-card ml-2 mr-2 mt-3 mb-3">
        <Settings></Settings>
      </CardContent>
      <CardContent>
        <Button variant="outline" aria-label="Generate" className="w-full cursor-pointer  p-4.5">Generate</Button>
      </CardContent>
    </Card>
  )
}

export default App