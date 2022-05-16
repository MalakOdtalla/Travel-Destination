
import { useParams } from "react-router-dom";
import  { useState } from 'react';

const Data=require('../../data/db.json')


function TourDetails() {

    let  {id}=useParams();  
    let result=Data.filter(Data => Data.id===id) 
    const [hidden, setHidden] = useState(true);
    let maxLength=300;

    return (
      
   <> 
<div    class="gallery" key={result[0].id}   >
 <img src={result[0].image} alt={result[0].name}/>
    <ul>
        <li>Name:{result[0].name}</li>
        <li>Price:{result[0].price}</li>
    
<li>{hidden ? `${result[0].info.substring(0, maxLength).trim()} ` : result[0].info}{hidden ? 
(  <a onClick={() => setHidden(false)} style={{color:"purple"}}> read more</a>) : 
( <a onClick={() => setHidden(true)} style={{color:"purple"}} > read less</a>)}

        </li>
      
    

    </ul>

</div>

   </>
    );
  }

  export default TourDetails;