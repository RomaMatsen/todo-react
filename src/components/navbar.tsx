interface Props {
    setPage: (page: "todo-list" | "contacts" | "about") => void;
    page: "todo-list" | "contacts" | "about";
}

export const Navbar = (p: Props) => {
    return (
        <div className="w-screen h-16 gap-2 bg-green-100 flex justify-end px-6 items-center">
            
            <button onClick={() => p.setPage("todo-list")} 
                className={`${p.page==="todo-list" && "border-2 border-solid border-blue-600"} p-2 rounded-full px-4 bg-slate-300`}>Todo list</button>
            
            <button onClick={() => p.setPage("contacts")} 
                className={`${p.page==="contacts" && "border-2 border-solid border-blue-600"} p-2 rounded-full px-4 bg-slate-300`}>Contacts</button>
            
            <button onClick={() => p.setPage("about")} 
                className={`${p.page==="about" && "border-2 border-solid border-blue-600"} p-2 rounded-full px-4 bg-slate-300`}>About</button>

        </div>
    )
}
