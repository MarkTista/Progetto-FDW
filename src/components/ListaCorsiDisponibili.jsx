// components/ListaCorsiDisponibili.jsx
import Table from 'react-bootstrap/Table';
import { users } from '../User';

function ListaCorsiDisponibili({ corsi, onIscriviti }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Docente</th>
          <th>Corso</th>
          <th>Azioni</th>
        </tr>
      </thead>
      <tbody>
        {corsi.map((corso) => {
          const docente = users.find(user => user.id === corso.id_docente && user.role === 'docente');

          return (
            <tr key={corso.id}>
              <td>{docente ? docente.nome : 'Sconosciuto'}</td>
              <td>{corso.titolo}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() =>
                    onIscriviti({
                      ...corso,
                      descrizione: `${corso.descrizione}\nProf: ${docente?.nome || 'Sconosciuto'}`,
                    })
                  }
                >
                  Iscriviti
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ListaCorsiDisponibili;
