import { Table } from "react-bootstrap";

function ListaCorsiDisponibili({ corsi,onIscriviti }) {
  if (corsi.length === 0) return null;

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Docente</th>
          <th>Corso</th>
          <th>Iscriviti</th>
        </tr>
      </thead>
      <tbody>
        {corsi.map((corso) => (
          <tr key={corso._id}>
            <td> {`${corso.docente.nome} ${corso.docente.cognome}`} </td>
            <td>{corso.titolo}</td>
            <td><button onClick={() => onIscriviti(corso)}>Iscriviti</button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListaCorsiDisponibili;
