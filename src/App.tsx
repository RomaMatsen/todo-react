import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/navbar";
import { TodoListPage } from "./components/pages/todolistPage";
import { ContactsPage } from "./components/pages/contactsPage";
import { AboutPage } from "./components/pages/aboutPage";

function App() {

    const [page, setPage] = useState<"todo-list" | "contacts" | "about">("todo-list");

    return (
        <div className="w-screen min-h-screen flex flex-col">
            <Navbar setPage={setPage} page={page} />
            <p>{page}</p>

            {page === "todo-list" && (<TodoListPage />)}
            {page === "contacts" && (<ContactsPage />)}
            {page === "about" && (<AboutPage />)}

        </div>
    );
}

export default App;
