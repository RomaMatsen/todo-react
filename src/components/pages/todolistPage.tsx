import { useState, useEffect } from "react";
import { TodoItemInterface } from "../../types";
import { Todo } from "../todo";
import { Complet } from "../todo"

export const TodoListPage = () => {
    const [items, setItems] = useState<TodoItemInterface[]>();
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        if(items) return
        setItems(JSON.parse(localStorage.getItem("items")) || [])
    })

    const addTodoItem = () => {
        const newItems: TodoItemInterface[] = [...items, { title: title, completed: false, }];
        setItems(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
        setTitle("");
    };
    const doneItem = (index: number) => {
        const newItems: TodoItemInterface[] = [...items];
        newItems[index].completed = !newItems[index].completed;
        setItems(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
    }

    return (
        <div className="p-5 rounded-xl gap-5 bg-slate-100 flex flex-col border-2 border-solid border-state-300"> 
            <h1 className="text-3xl font-medium"> Simple todo list</h1> 
            <div className="flex flex-col gap-2">
                {
                    items && items.map((ArrItem, i) => (
                        <>
                        {
                        ArrItem.completed ? 
                            (<Complet key={i} item={ArrItem} doneItem={() => { doneItem(i) }} />)
                            : (<Todo key={i} item={ArrItem} doneItem={() => { doneItem(i) }} />)
                        }
                        </>
                        )
                    ) 
                }
            </div>

             <input 
                 type="text" 
                 value={title} 
                 className="rounded-full p-1 bg-white text-black border border-solid border-slate-300 px-2" 
                 onChange={(e) => { setTitle(e.currentTarget.value); }} 
             /> 
             <button onClick={addTodoItem} className="p-2 rounded-full px-4 bg-slate-300">add</button> 
         </div> 
    )
}
