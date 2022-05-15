import Header from '../header/Header'
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import Tours from "../Tours/Tours"
const Data=require('../../data/db.json')




function Home(){
return(
<>
<Header/>
<Navbar/>
{Data.map(element =>{
    return(
<Tours    name={element.name}  img={element.image}/>
    )
})}

<Footer/>

</>


);

}

export default Home;