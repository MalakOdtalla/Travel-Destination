import './Tour.css'



function Tour(props){
return(

<>

<div class="gallery" >

<img src={props.img}/> 

<div class="desc">{props.name}</div>
  </div>

 

</>


);
}
export default Tour;