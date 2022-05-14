import Header from '/home/malak/project/Travel-Destination/travel/src/Components/header/Header'
import Footer from "/home/malak/project/Travel-Destination/travel/src/Components/Footer/Footer";
import Tours from "/home/malak/project/Travel-Destination/travel/src/Components/Tours/Tours"



const Data=require('/home/malak/project/Travel-Destination/travel/src/data/db.json')



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