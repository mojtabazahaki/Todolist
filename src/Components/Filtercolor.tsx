import { useState } from "react"
import { useDispatch } from "react-redux"
import { ADDCOLOR } from "../Feature/Filtercolorstatus"
import { AppDispatch } from "../Store"

const colorlist: string[] = ["red", "green", "blue", "black"]
const FilterColor: React.FC = () => {


    const dispach = useDispatch<AppDispatch>()

    const [list1, setlist] = useState<number[]>([])


    const handelback = (index: number, color: string) => {

        dispach(ADDCOLOR(color))

        if (!list1.includes(index)) {
            setlist(list1 => [...list1, index])
        }
        else (
            setlist(list1 => list1.filter(li => li !== index))
        )
    }


    const createChooseColor = colorlist.map((color: string, index: number) => {

        return (

            <div key={index} >
                <label onClick={() => handelback(index, color)}
                    style={{ color: color, background: list1.includes(index) ? "#dcd2d2" : 'white' }}
                    className={`  p-4 border-black border-[2px]  border-solid`} htmlFor={color}>
                    {color}
                </label>

                <input className=' w-0 opacity-0' type="checkbox" name={color} id={color} />
            </div>
        )
    })

    return (
        <>
            {
                createChooseColor
            }
        </>
    )
}

export default FilterColor;