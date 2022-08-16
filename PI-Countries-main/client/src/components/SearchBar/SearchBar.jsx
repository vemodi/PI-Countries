import { useState} from 'react'
import { useDispatch } from 'react-redux';
import { searchCountries } from '../../actions/index';
import './SearchBar.css'

export default function SearchBar() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    
    function onSubmit(e){
        e.preventDefault();
        if (search.length === 0) return alert('Debe colocar un Pais');
        dispatch(searchCountries(search))
        setSearch('')
    }

    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value)
   
    }

    return (<div className='formSearchBar'>
        <form  onSubmit={onSubmit}>
            <input className='inputCountry' type="text" placeholder='Colocar pais...' onChange={onInputChange} value={search} />
            <input className='inputButton' type="submit" value="" />
        </form>
    </div>)
}
