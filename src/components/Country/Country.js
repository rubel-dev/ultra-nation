 import React from 'react';
import { Link, useHistory } from 'react-router-dom';
 import './Country.css'
 
 const Country = (props) => { 
     const {name,capital,region,flag} =props.country;
     let history = useHistory() 
     const handleShowDetail =(name)=>{
       history.push(`/country/${name}`)
     }
     return (
         <div className='country'>
             <div className="flag">
                 <img src={flag} alt="" />
             </div>
             <div className="country-content">
                 <h4>Name : {name}</h4>
                 <p>Capital : {capital}</p>
                 <p><small>Region : {region}</small></p>
                  <Link to={`/country/${name}`}> <span className='detail-btn'>Show Detail</span></Link>
                   <br />
                   <br />
                 <button onClick={()=>handleShowDetail(name)} className='detail-btn'>Country Details</button>
             </div>
         </div>
     );
 };
 
 export default Country;