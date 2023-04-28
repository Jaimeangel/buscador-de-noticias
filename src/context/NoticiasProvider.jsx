import { createContext , useState} from "react"

const NoticiasContext=createContext()

function NoticiasProvider({children}) {

  const [categoria,setCategoria]=useState('general')

  const handleSetCategoria=(e)=>{
    e.preventDefault()
    setCategoria(e.target.value)
  }

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleSetCategoria
      }}
    >
        {children}
    </NoticiasContext.Provider>
  )
}

export default NoticiasContext;

export {
    NoticiasProvider
}
