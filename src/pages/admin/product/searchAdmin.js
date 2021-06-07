import React,{useState} from 'react'


const SearchAdmin = (props) => {
    function handleSearch(e){
        const fromValue = e.target.value
        props.onSearch(fromValue)
    }
    return (
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"
         onChange={handleSearch}></input>
    )
}

export default SearchAdmin
