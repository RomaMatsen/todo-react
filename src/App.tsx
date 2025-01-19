import "./App.css";
import { useState } from "react";
import { Todo } from "./components/todo";
import { NavItemBuild } from "./components/nav";
import { TodoItemInterface } from "./types";

function App() {
    const [items, setItems] = useState<TodoItemInterface[]>([]);
    const [title, setTitle] = useState<string>("");
    const addTodoItem = () => {
        const newItems: TodoItemInterface[] = [...items, {title: title, completed: false,}];
        setItems(newItems);
        setTitle("");
    };
    const doneItem = (index: number) => {
        const newItems: TodoItemInterface[] = [...items];
        newItems[index].completed = !newItems[index].completed;
        setItems(newItems);
    }
    const [navItems, setNavItems] = useState(["Todo list", "Contacts", "About"]);
    const [pageNumber, setPageNumber] = useState(1);
    const openPage = (index: number) => {

    }

    return (
        <div className="w-screen h-screen flex flex-col">
          <div className="w-screen flex justify-end">
            {
              navItems.map((navItem, index)=><NavItemBuild key={index} str={navItem} pageNumber={pageNumber} openPage={() => {openPage (pageNumber)}}/>)
            }
          </div>
          <div className="flex justify-center h-screen">
            <div className="p-5 rounded-xl gap-5 bg-slate-100 flex flex-col border-2 border-solid border-state-300">
                <h1 className="text-3xl font-medium"> Simple todo list</h1>
                <div className="flex flex-col gap-2">
                    {
                        items.map((ArrItem, i) => <Todo key={i} item={ArrItem} doneItem={() => { doneItem(i) }}/>)
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
          </div>
        </div>
    );
}

export default App;
