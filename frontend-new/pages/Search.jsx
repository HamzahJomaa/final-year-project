import React, {useEffect, useState} from 'react';
import {getGenre} from "../api/Main";

const Search = ({type,sendSearch}) => {
    const [categories,setCategories] = useState([])
    const [category,setCategory] = useState("")
    const [q,setQ] = useState()
    const [rate,setRate] = useState("")
    const [from,setFrom] = useState("")
    const [to,setTo] = useState("")

    const handleSearch =  () =>{
        let query = {
            q,
            genre : category,
            rate,
            datefrom : new Date(from),
            dateto: new Date(to),
        }
        sendSearch(query)
    }

    const clearSearch = () =>{
        setCategory("")
        setQ("")
        setFrom("")
        setTo("")
        setRate("")
        let query = {
            q : "",
            genre : "",
            rate: "",
            datefrom : "",
            dateto: "",
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
                        <input type="text" placeholder="Enter keywords" value={q} onChange={(e)=>{setQ(e.target.value)}} />
                    </div>
                    <div className="col-md-12 form-it">
                        <label>Genres & Subgenres</label>
                        <div className="group-ip">
                            <select
                                name="skills" multiple="" className="ui fluid dropdown" onChange={(e)=>{setCategory(e.target.value)}}>
                                <option  value="">Enter to filter genres</option>
                                {categories?.length > 0 ? categories.map((categoryitem,index)=>(
                                    <option  key={index} value={categoryitem.tmdb}>{categoryitem.name}</option>
                                )) : "" }
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 form-it">
                        <label>Rating</label>
                        <select value={rate} onChange={(e)=>setRate(e.target.value)}>
                            <option value="">Select Rate</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="col-md-12 form-it">
                        <label>Release Year</label>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="date" value={from} name="" onChange={(e) => setFrom(e.target.value)} id="" />
                            </div>
                            <div className="col-md-6">
                                <input type="date" value={to} name="" onChange={(e) => setTo(e.target.value)} id="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 ">
                        <input className="submit" type="button" onClick={handleSearch} value="Submit" />
                    </div>
                    <div className="col-md-12" style={{marginTop:"1rem"}}>
                        <input className="submit" type="button" onClick={clearSearch} value="Clear" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;