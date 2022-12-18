import { useState } from 'react'
import ImageList from './components/ImageList'
import SearchBar from './components/searchBar'
import searchImage from './components/Api'

function App() {
  const [images, setImages] = useState([])
  const handleChange = async (term) => {
    // console.log('search with', term)
    const results = await searchImage(term)
    // console.log(results.data)
    setImages(results.data)
  }

  return (
    <>
      <SearchBar onSubmit={handleChange} />
      {/* {images && JSON.stringify(images)}  */}
      {images?.results?.length && <ImageList images={images} />} 
       
    </>
  )
}

export default App