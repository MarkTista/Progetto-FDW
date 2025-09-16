import { Table } from "react-bootstrap";
import {Button} from"react-bootstrap";
import './ListaCorsiDisponibili.css'

function ListaCorsiDisponibili({ corsi ,onIscriviti }) {

return (
  corsi.length > 0 ? (
    <Table className="tabella-corsi" striped bordered hover size="sm">
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
            <td>{`${corso.docente.nome} ${corso.docente.cognome}`}</td>
            <td>{corso.titolo}</td>
            <td className="text-center">
              <Button variant="success"  size="sm" onClick={() => onIscriviti(corso)} >Iscriviti</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <p className="fs-5">I DOCENTI DEVONO ANCORA CARICARE I CORSI...ATTENDI</p>
  )
);
}

export default ListaCorsiDisponibili;
