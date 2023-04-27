import { createContext } from "react"

const NoticiasContext=createContext()

function NoticiasProvider({children}) {
  return (
    <NoticiasContext.Provider>
        {children}
    </NoticiasContext.Provider>
  )
}

export default NoticiasContext;

export {
    NoticiasProvider
}
