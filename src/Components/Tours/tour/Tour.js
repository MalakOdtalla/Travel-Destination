import './Tour.css'
import {Link} from "react-router-dom";



function Tour(props){
return(

<>
{
  props.data.map(city =>{
   return(
        <Link to={`/city/${city.id}`}  key={city.id}>

        <div class="gallery">
        <img src={city.image} alt={city.name}/> 
        <div class="desc"><h2>{city.name}</h2></div>

        </div>
        </Link>
    )
})
}
 

</>


);
}
export default Tour;