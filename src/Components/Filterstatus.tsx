import { useDispatch } from "react-redux"
import { AppDispatch } from "../Store"
import { ADDSTATUS } from "../Feature/Filtercolorstatus"
import { useState } from "react"
interface Typestatus {

    status: string,
    id: string
}

const Filterstatus: React.FC = () => {

    const creatstatus: Typestatus[] = [
        {
            status: "COMPLETED",
            id: "1completedtodo"
        },
        {
            status: "PENDINIG",
            id: "1pendingtodo"
        },
        {
            status: "ALL",
            id: "1ALLtodo"
        },
    ]
    const [list1, setlist] = useState<string[]>(["ALL"])


    const dispach = useDispatch<AppDispatch>()

    const handelstatus = (status: string) => {

        dispach(ADDSTATUS(status))

        if (!list1.includes(status)) {

            setlist([status])
        } else {
            setlist(list1 => list1.filter(li => li !== status))
        }
    }



    return (
        <>
            {
                creatstatus.map(statustodos => {

                    return (
                        <div key={statustodos.id}>
                            <label className=' p-4 border-black border-[2px]  border-solid' style={{ background: list1.includes(statustodos.status) ? "rgb(8, 231, 32)" : 'white' }}
                                onClick={() => handelstatus(statustodos.status)}
                                htmlFor={statustodos.id}>{statustodos.status}</label>
                            <input className=' w-0 opacity-0' type="checkbox" name="COMPLETED" id={statustodos.id} />
                        </div>
                    )
                })
            }

        </>
    )
}


export default Filterstatus;