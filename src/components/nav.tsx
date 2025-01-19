interface propForNav {
    str: string
    pageNumber: number
    openPage: () => void
}

export const NavItemBuild = (s: propForNav) => {
    return (
    <button className="bg-blue-500 border-2 border-blue-900 rounded-full p-1 m-3"
        onClick={s.openPage}>
        {s.str}
    </button>
    )
}