import React, { useState } from 'react'; // Importa React e useState insieme
import Navbar from '../components/Navbar';
import { users, corsi } from '../User';
import Container from 'react-bootstrap/Container';
import Cards from '../components/Cards';
import ListaCorsiDisponibili from '../components/ListaCorsiDisponibili';


function Homepages() {
  const studenteLoggatoId = 3;
  const studente = users.find(u => u.id === studenteLoggatoId && u.role === 'studente');

  const [corsiIscritti, setCorsiIscritti] = useState([]);

  const handleIscriviti = (corso) => {
    if (!corsiIscritti.find(c => c.id === corso.id)) {
      setCorsiIscritti([...corsiIscritti, corso]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-student">
        <Container>
          <h1 className="text-center mt-4">Tutti i corsi disponibili</h1>

          {/* ✅ Componente separato */}
          <ListaCorsiDisponibili corsi={corsi} onIscriviti={handleIscriviti} />

          {corsiIscritti.length > 0 && (
            <>
              <h3 className="mt-5">Corsi a cui sei iscritto:</h3>
              <div className="container-card d-flex flex-wrap">
                {corsiIscritti.map(corso => (
                  <Cards
                    key={corso.id}
                    id={corso.id}
                    title={corso.titolo}
                    text={corso.descrizione}
                    img={corso.img}
                    isAddCard={false}
                    role="studente"
                  />
                ))}
              </div>
            </>
          )}
        </Container>
      </div>
    </>
  );
}

export default Homepages;
