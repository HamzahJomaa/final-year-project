import React, {useEffect, useState} from 'react';
import {getGenre} from "../api/Main";

const Search = ({type,perPage,currentPage,sendSearch}) => {
    const [categories,setCategories] = useState([])
    const [category,setCategory] = useState("")
    const [q,setQ] = useState("")
    const handleSearch = async () =>{
        let query = {
            q,
            genre : category,
            rate : 0,
            datefrom : "",
            dateto: "",
            perPage,
            currentPage,
            type : "movies"
        }
        sendSearch(query)
    }
    useEffect( async ()=>{
        try {
            let CategoryApi = await getGenre({type:type.toLowerCase()})
            setCategories(CategoryApi?.data?.statusMessage)
        }catch (e) {
            console.error(e)
        }
    },)
    return (
        <div className="searh-form">
            <h4 className="sb-title">Search for {type}</h4>
            <div className="form-style-1">
                <div className="row">
                    <div className="col-md-12 form-it">
                        <label>{type} Keywords</label>
                        <input type="text" placeholder="Enter keywords" onKeyUp={(e)=>{setQ(e.target.value)}} />
                    </div>
                    <div className="col-md-12 form-it">
                        <label>Genres & Subgenres</label>
                        <div className="group-ip">
                            <select
                                name="skills" multiple="" className="ui fluid dropdown" onChange={(e)=>{setCategory(e.target.value)}}>
                                <option value="">Enter to filter genres</option>
                                {categories?.length > 0 ? categories.map((category,index)=>(
                                    <option key={index} value={category.tmdb}>{category.name}</option>
                                )) : "" }
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 form-it">
                        <label>Rating Range</label>
                        <select>
                            <option value="range">-- Select the rating range below --</option>
                            <option value="saab">-- Select the rating range below --</option>
                        </select>
                    </div>
                    <div className="col-md-12 form-it">
                        <label>Release Year</label>
                        <div className="row">
                            <div className="col-md-6">
                                <select>
                                    <option value="range">From</option>
                                    <option value="number">10</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <select>
                                    <option value="range">To</option>
                                    <option value="number">20</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 ">
                        <input className="submit" type="button" onClick={handleSearch} value="submit" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;