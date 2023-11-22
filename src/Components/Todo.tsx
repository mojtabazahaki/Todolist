import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../Store"
import axios from "axios"
import { TOGGLETOD, DELETTODO, ADDCOLORTODO, Todo } from "../Feature/TodoSlice"

interface Props {
    idtodo: string
}




const Todofunction: React.FC<Props> = ({ idtodo }) => {
    const colorlist: string[] = ["red", "green", "blue", "black"]
    const Todo12 = useSelector((state: RootState) => state.Todo.Todostate[idtodo])




    const dispach = useDispatch()



    const { task, completed, color } = Todo12 as Todo




    const creatcolor = colorlist.map((colortodo: string, index: number) => {

        return <option key={index} value={colortodo} style={{ color: colortodo }}>{colortodo}</option>
    })


    const handelselectcolor = (event: React.ChangeEvent<HTMLSelectElement>) => {

        const { value } = event.target


        dispach(ADDCOLORTODO(idtodo, value))

    }
    const handeltoggle = (id: string) => {

        dispach(TOGGLETOD(id))

    }
    const deletetodos1 = async (idtodo: string) => {

        await axios.delete(`http://localhost:3000/todo/${idtodo}`)

    };
    const handeldeleted = (id: string) => {


        dispach(DELETTODO(id))
        deletetodos1(id)


    }

    return (
        <div className=" flex justify-between mb-3" key={idtodo} >
            <div className=" flex w-[90%] justify-between">
                <li className=" border-l-[6px]  p-3 border-solid border-l-red-700">{task}</li>
                <div className=" flex items-center">
                    <select style={{ color: color }}
                        className=" rounded-[4px] pt-[2px] pr-[12px] pb-[8px] pl-[7px]"
                        value={color}
                        onChange={(e) => handelselectcolor(e)}>
                        <option value=""></option>
                        {
                            creatcolor
                        }
                    </select>
                </div>
            </div>
            <div className=" flex items-center ml-3">
                <label htmlFor={idtodo}
                    style={{ background: completed ? "green" : "white" }} className=" w-6 h-6  border-black  rounded-full border-[1px] border-solid"></label>
                <input type="checkbox"
                    id={idtodo} defaultChecked={completed}
                    onClick={() => handeltoggle(idtodo)} name="completed" className="opacity-0 w-0 h-0  absolute" />
            </div>
            <div className=" flex items-center">
                <i className=" before:content-[url('Close.svg')]  before:flex ml-1" onClick={() => handeldeleted(idtodo)}></i>
            </div>
        </div >

    )
}

export default Todofunction