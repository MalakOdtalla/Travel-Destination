import Header from '../header/Header'
import Footer from "../Footer/Footer";
import Tours from "../Tours/Tours"
const Data=require('../../data/db.json')




function Home(){
return(
<>
<Header/>

{Data.map(element =>{
    return(
<Tours    name={element.name}  img={element.image}/>
    )
})


}

<Footer/>

</>


);

}

export default Home;