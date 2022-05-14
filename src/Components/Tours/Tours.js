import {Link} from "react-router-dom";


function Tours(props){
return(
<div>


<p>
    {props.name}
</p>
<img src={props.img}/>
</div>



);


}
export default Tours;