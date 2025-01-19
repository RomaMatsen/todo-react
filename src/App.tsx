import "./App.css";
import { useState } from "react";
import { Todo } from "./components/todo";
import { Navbar } from "./components/navbar";
import { TodoItemInterface } from "./types";
import { AboutPage } from "./components/pages/aboutPage";

function App() {
    const [items, setItems] = useState<TodoItemInterface[]>([]);
    const [title, setTitle] = useState<string>("");
    const addTodoItem = () => {
        const newItems: TodoItemInterface[] = [...items, { title: title, completed: false, }];
        setItems(newItems);
        setTitle("");
    };
    const doneItem = (index: number) => {
        const newItems: TodoItemInterface[] = [...items];
        newItems[index].completed = !newItems[index].completed;
        setItems(newItems);
    }

    // const [navItems, setNavItems] = useState(["Todo list", "Contacts", "About"]);
    // const [pageNumber, setPageNumber] = useState(1);
    // const openPage = (index: number) => {

    // }
    //

    const [page, setPage] = useState<"todo-list" | "contacts" | "about">("todo-list");

    return (
        <div className="w-screen h-screen flex flex-col">
            <Navbar setPage={setPage} />
            <p>{page}</p>

            {
                page === "about" && (<AboutPage />)
            }

            {/* <div className="p-5 rounded-xl gap-5 bg-slate-100 flex flex-col border-2 border-solid border-state-300"> */}
            {/*     <h1 className="text-3xl font-medium"> Simple todo list</h1> */}
            {/*     <div className="flex flex-col gap-2"> */}
            {/*         { */}
            {/*             items.map((ArrItem, i) => <Todo key={i} item={ArrItem} doneItem={() => { doneItem(i) }} />) */}
            {/*         } */}
            {/*     </div> */}
            {/*     <input */}
            {/*         type="text" */}
            {/*         value={title} */}
            {/*         className="rounded-full p-1 bg-white text-black border border-solid border-slate-300 px-2" */}
            {/*         onChange={(e) => { setTitle(e.currentTarget.value); }} */}
            {/*     /> */}
            {/*     <button onClick={addTodoItem} className="p-2 rounded-full px-4 bg-slate-300">add</button> */}
            {/* </div> */}
        </div>
    );
}

export default App;
