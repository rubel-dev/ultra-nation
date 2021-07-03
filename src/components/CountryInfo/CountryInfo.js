 import React from 'react';
 import './CountryInfo.css'
 
 const CountryInfo = (props) => {  
      const language = props.country.languages[0].nativeName;
     const {flag,name,nativeName,population,region} = props.country;

     return (
         <div className='country-info'>
             <img src={flag} alt="" />
             <h2>Name : {name}</h2>
             <h4>native Name  : {nativeName}</h4>
             <p>population : {population}</p>
             <p><small>Region : {region}</small></p>
             <p>Language : {language}</p>
         </div>
     );
 };
 
 export default CountryInfo;