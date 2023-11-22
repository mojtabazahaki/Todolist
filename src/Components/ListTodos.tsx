import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../Store"
import Todo from "./Todo";
import { useEffect } from "react";
import { fechtata } from "../Feature/TodoSlice";
import Loder from "./Loder/Loder";

const ListTodos: React.FC = () => {
    const dispach = useDispatch<AppDispatch>()

    useEffect(() => {

        dispach(fechtata())
    }, [dispach])



    const Todo1 = useSelector((state: RootState) => state, shallowEqual)

    const loder = useSelector((state: RootState) => state.Todo.Loding)



    const selectvalue = (state: RootState) => {

        return Object.values(state.Todo.Todostate)
    }


    const selector = (state: RootState) => {
        const Todos = selectvalue(state)


        const { colors, status } = state.Filter

        const shoall: boolean = status === "ALL"

        if (shoall && colors.length == 0) {
            return Todos
        }

        const complet: boolean = status === "COMPLETED"

        return Todos.filter((todo) => {

            const statuss = shoall || todo.completed === complet
            const filtercolor = colors.length === 0 || colors.includes(todo.color)

            return statuss && filtercolor
        })


    }

    const finuly = (state: RootState) => {

        const filter = selector(state)

        return filter.map(todo => todo.id)
    }




    const createtodo: JSX.Element[] = finuly(Todo1).map((todoid: string) => {


        return <Todo key={todoid} idtodo={todoid} />
    })


    return (

        <ul className=" ml-5" style={{ width: "97%", display: "grid", gridTemplateColumns: "20rem 20rem 20rem", gap: "2rem" }}>
            {
                loder === "isloding" ?
                    <Loder /> :
                    createtodo
            }
        </ul >
    )
}


export default ListTodos