import "./Homepage.css";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="container-homepage">
        <hgroup>
          <h1>Impara e acquisisci nuove competenze online</h1>
          <h2>Una piattaforma pensata per studenti e professori</h2>
        </hgroup>

        <div className="row">
          <div className="motivi">
            <h3>Perché scegliere la nostra piattaforma:</h3>
            <ul>
              <li>⏰ Flessibilità: impara quando e dove vuoi</li>
              <li>👩‍🏫 Docenti esperti e qualificati</li>
              <li>📚 Materiali sempre aggiornati</li>
            </ul>
          </div>

          <div className="come-funziona">
            <h3>Come funziona:</h3>
            <ol>
              <li>Registrati come studente o professore</li>
              <li>Scegli o crea il corso che fa per te</li>
              <li>Impara, insegna e condividi conoscenza</li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="studenti">
            <h3>Per gli studenti:</h3>
            <ul>
              <li>🚀 Impara al tuo ritmo</li>
              <li>📖 Accedi a materiali multimediali e interattivi</li>
            </ul>
          </div>

          <div className="professori">
            <h3>Per i professori:</h3>
            <ul>
              <li>📝 Crea e gestisci corsi personalizzati</li>
              <li>👥 Interagisci con i tuoi studenti</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
