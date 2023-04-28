import axios from 'axios'
import {createContext,useState,useEffect} from "react"

const NoticiasContext=createContext()

function NoticiasProvider({children}) {

  const [categoria,setCategoria]=useState('general')
  const [noticias,setNoticias]=useState([])
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)

  const handleSetCategoria=(e)=>{
    e.preventDefault()
    setCategoria(e.target.value)
  }

  const handleSetPage=(e,value)=>{
    setPage(value)
  }

  useEffect(()=>{
    const getNoticias=async ()=>{
      const url=`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const {data}= await axios(url)
      setNoticias(data.articles)
      setTotalResults(data.totalResults)
      setPage(1)
    }
    getNoticias()
  },[categoria])

  useEffect(()=>{
    const getNoticias= async ()=>{
      const url=`https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const {data}= await axios(url)
      setNoticias(data.articles)
      setTotalResults(data.totalResults)
    }
    getNoticias()
  },[page])

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleSetCategoria,
        noticias,
        totalResults,
        page,
        handleSetPage
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
