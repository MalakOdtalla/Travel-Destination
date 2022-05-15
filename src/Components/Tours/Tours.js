import './Tours.css'



function Tours(props){
return(

<>
<div  class="responsive" >
<div class="gallery" >

<img src={props.img}/> 

<div class="desc">{props.name}</div>
  </div>
</div>
<div class="clearfix"></div>
</>


);
}
export default Tours;