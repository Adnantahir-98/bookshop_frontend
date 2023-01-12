import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'


function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <>
            <form onSubmit={submitHandler} className="d-flex ms-4 me-auto" id="main-search">
                <input type="search" onChange={(e) => setKeyword(e.target.value)} name='q' className="form-control border-end-0" placeholder="Search..." aria-label="Search" style={{ borderTopRightRadius: "0%", borderBottomRightRadius: "0%" }} />
                <button className="btn btn-danger border-left-0" type="submit" style={{ borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%", }}><AiOutlineSearch /></button>
            </form>
        </>
    )
}

export default SearchBox
