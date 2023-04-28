import axios from 'axios'
import {createContext,useState,useEffect} from "react"

const NoticiasContext=createContext()

function NoticiasProvider({children}) {

  const [categoria,setCategoria]=useState('general')
  const [noticias,setNoticias]=useState([])

  const handleSetCategoria=(e)=>{
    e.preventDefault()
    setCategoria(e.target.value)
  }

  useEffect(()=>{
    const getNoticias=async ()=>{
      const url=`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const {data:{articles}}= await axios(url)
      setNoticias(articles)
    }
    getNoticias()
  },[categoria])

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleSetCategoria,
        noticias
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
