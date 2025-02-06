import { TodoItemInterface } from "../types"

interface Prop {
    item: TodoItemInterface
    doneItem: () => void
}

export const Todo = (p: Prop) => {
    return (
        <>
        <div className={`p-2 flex justify-between rounded-full text-black ${p.item.completed ? "bg-green-200" : "bg-slate-200"}`}>
            <p> {p.item.title} </p>
            <button onClick={p.doneItem}>done</button>
        </div>
        </>
    )
}

export const Complet = (p: Prop) => {
    return (
        <>
        <div className={`p-2 flex justify-between rounded-full text-black ${p.item.completed ? "bg-green-200" : "bg-slate-200"}`}>
            <p> {p.item.title} </p>
            <button onClick={p.doneItem}>delete</button>
        </div>
        </>
    )
}