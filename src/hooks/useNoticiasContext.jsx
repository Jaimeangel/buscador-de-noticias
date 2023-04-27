import { useContext } from "react"
import NoticiasContext from "../context/NoticiasProvider"

function useNoticiasContext() {
  return useContext(NoticiasContext)
}

export default useNoticiasContext;
