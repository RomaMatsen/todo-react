import { TodoItemInterface } from "../types"

export const Todo = (

    { item }: { item: TodoItemInterface }

) => {
    return (
        <div className="p-2 rounded-full bg-slate-200 text-black">
            {item.title}
        </div>
    )
}
