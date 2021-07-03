import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryInfo from './../CountryInfo/CountryInfo';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [countryDetail, setCountryDetail] = useState([])
    
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setCountryDetail(data))
    },[])
     
    return (
        <div>
           {
              countryDetail.map(country => <CountryInfo country ={country}></CountryInfo>) 
           }
        </div>
    );
};

export default CountryDetail;