import "./App.css";
import { useState } from "react";
import { Todo } from "./components/todo";
import { TodoItemInterface } from "./types";

function App() {
    const [items, setItems] = useState<TodoItemInterface[]>([]);
    const [title, setTitle] = useState<string>("");

    const handleClick = () => {
        const newItems: TodoItemInterface[] = [...items,
        {
            title: title,
            completed: false,
        }
        ];
        setItems(newItems);
        setTitle("");
    };

    const doneItem = (index: number) => {
        const newItems: TodoItemInterface[] = [...items];
        newItems[index].completed = !newItems[index].completed;
        setItems(newItems);
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="p-5 rounded-xl gap-5 bg-slate-100 flex flex-col border-2 border-solid border-state-300">
                <h1 className="text-3xl font-medium"> Simple todo list</h1>
                <div className="flex flex-col gap-2">
                    {
                        items.map((ArrItem, i) =>
                            <Todo key={i} item={ArrItem} doneItem={() => { doneItem(i) }} />
                        )
                    }
                </div>
                <input
                    type="text"
                    value={title}
                    className="rounded-full p-1 bg-white text-black border border-solid border-slate-300 px-2"
                    onChange={(e) => { setTitle(e.currentTarget.value); }}
                />
                <button onClick={handleClick} className="p-2 rounded-full px-4 bg-slate-300">add me</button>
            </div>
        </div>
    );
}

export default App;
