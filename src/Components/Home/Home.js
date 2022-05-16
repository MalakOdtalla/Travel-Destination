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
<Tour data={Data}/>

<Footer/>

</>


);

}

export default Home;