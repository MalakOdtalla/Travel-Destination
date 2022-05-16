import Header from '../header/Header'
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import Tours from "../Tours/Tours";
import Tour from '../Tours/tour/Tour';
import {Link} from "react-router-dom";

import TourDetails from "../TourDetails/TourDetails"

const Data=require('../../data/db.json')




function Home(){
return(
<>
<Header/>

{Data.map(city =>{
    return(
        <Link to={`/city.id/${city.id}`}  key={city.id}>

        <div>
        <Tour name={city.name}  img={city.image}/>

        </div>
        </Link>
    )
})}

<Footer/>

</>


);

}

export default Home;