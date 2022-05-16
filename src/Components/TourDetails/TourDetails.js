
import { useParams } from "react-router-dom";
const Data=require('../../data/db.json')


function TourDetails() {
    let  {id}=useParams();  
    let result=Data.filter(Data => Data.id===id) 
    console.log(result)

    return (
      
   <> 
<div >
{/*     key={result[0].id}*/}   
 <img src={result[0].image} alt={result[0].name}/>
    <ul>
        <li>Name:{result[0].name}</li>
        <li>Price:{result[0].price}</li>

    </ul>

</div>
   </>
    );
  }

  export default TourDetails;