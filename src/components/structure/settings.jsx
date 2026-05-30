import { Slider } from "../ui/slider"
import { Field, FieldLabel } from "../ui/field"
import { Checkbox } from "../ui/checkbox"

function Settings({ length, setLength, checked, setChecked }) {

    return (
        <>
            <div className="character-setting w-full flex justify-between flex-wrap gap-3">
                <div>Length</div>
                <div id="length">{length}</div>
                <Slider value={[length]} 
                        min={4} 
                        max={32} 
                        step={1} 
                        onValueChange={(v) => setLength(v[0])} 
                        className="grow cursor-grab active:cursor-grabbing" 
                />
            </div>
            <div className="format-setting w-full flex flex-wrap justify-between gap-y-4 mt-6">
                {
                    ['uppercase', 'lowercase', 'numbers', 'symbols'].map((e, i) => {
                        return (
                            <Field orientation="horizontal" key={i} className="max-w-1/2">
                                <Checkbox id={e} 
                                          name={e + "-box"} 
                                          checked={checked[i]} 
                                          className="cursor-pointer" 
                                          onCheckedChange={(check) => {
                                            setChecked((prev)=> { 
                                                const next = [...prev]; 
                                                next[i] = check; 
                                                return next; 
                                            })
                                        }}
                                />
                                <FieldLabel htmlFor={e} className="capitalize">{e}</FieldLabel>
                            </Field>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Settings