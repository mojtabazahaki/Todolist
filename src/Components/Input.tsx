import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADDTODO, posttodos } from '../Feature/TodoSlice'
import SearchColor from './SearchColor'
import { AppDispatch } from '../Store'



type Event = React.ChangeEvent<HTMLInputElement>





const Input: React.FC = () => {

    const dispach = useDispatch<AppDispatch>()

    const [task, setTask] = useState<string>("")

    const handeltask = (event: Event) => {

        const { value } = event.target

        setTask(value)

    }


    const handeladdtodo = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.key === "Enter") {
            dispach(posttodos(task))
            dispach(ADDTODO(task))
            setTask("")

        }
    }



    return (

        <div className=" flex items-center">
            <div className=' flex  flex-col mb-10 ml-5'>
                <label className=" p-6" htmlFor="mm">Inter your task</label>
                <div>
                    <input className=" w-[20rem] px-8 py-4  outline-none border-[1px] border-solid border-black rounded-[3px]" onKeyDown={(e) => handeladdtodo(e)}
                        value={task}
                        onChange={(e) => handeltask(e)}
                        type='text' id="mm" placeholder="Digite o nome do produto" />
                </div>
            </div>
            <SearchColor />
        </div>
    )
}


export default Input;