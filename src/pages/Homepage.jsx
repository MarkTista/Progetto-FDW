import './Homepage.css'
import Navbar from '../components/Navbar'
function Homepage()
{
    return(
        <>
       <Navbar></Navbar>
       <div className="hero">
        <h1> Impara e acquiscisci nuove compentenze online</h1>
        <h2> Per te tanti corsi a disposizione</h2>
        <p>BREVE INTRODUZIONE</p>
        <button>ESPLORA CORSI solo se utente fa login</button>
       </div>
       
        </>
    );
}
export default Homepage