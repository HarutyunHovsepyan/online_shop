import { createContext, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.jsx'

export const CategoriessContext = createContext({
  categoriesMap: [],
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([])
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      console.log(categoryMap)
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])

  const value = { categoriesMap }
  return (
    <CategoriessContext.Provider value={value}>
      {children}
    </CategoriessContext.Provider>
  )
}
