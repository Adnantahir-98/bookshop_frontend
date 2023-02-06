import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import axios from 'axios'


const SearchBox = () => {

    const [query, setQuery] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(`http://localhost:5000/api/products?q=${query}`)
            setData(res.data)
        }
        if (query.length === 0 || query.length > 2) fetchProducts()
    }, [query])

    const keys = ['title', 'desc', 'categories']

    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))
        )
    }

  return (
    <>
        <form onSubmit={search} className="d-flex ms-4 me-auto" id="main-search">
            <input type="text" name='q' data={data} onChange={e => setQuery(e.target.value.toLowerCase())} className="form-control border-end-0" placeholder="Search..." aria-label="Search" style={{ borderTopRightRadius: "0%", borderBottomRightRadius: "0%" }} />
            <button className="btn btn-danger border-left-0" type="submit" style={{ borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%", }}><AiOutlineSearch /></button>
        </form>
    </>
  )
}

export default SearchBox;
