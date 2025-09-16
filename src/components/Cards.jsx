import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from'react-router-dom'

function Cards({ title, text, img, id, role, isAddCard, onClick,onEdit,onDelete }) {
    const isDocente = role === "docente";
    const isStudente = role === "studente";
      const user = JSON.parse(sessionStorage.getItem("user"));
      const userid = user._id;
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={img} alt="foto" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
          {isDocente && isAddCard &&(<Button variant="secondary" onClick={onClick}>Aggiungi Corso</Button>)} 
          {isDocente && !isAddCard && (<>
            <Link to={`/Homepaged/corso/${id}/lezione`}>
              <Button variant="primary" className="mb-2">Aggiungi Lezione</Button>
            </Link>
            <div>
              <Button variant="warning" className="me-2" onClick={onEdit}>Modifica</Button>
              <Button variant="danger" onClick={onDelete}>Elimina</Button>
            </div>
          </>
        )}
          {isStudente && (
            <div className="d-flex gap-1">
              <Link to={`/studente/${userid}/corso/${id}`}>
                <Button variant="info" className="mb-2">Visualizza Lezioni</Button>
              </Link>
              <Button variant="danger" className="mb-2" onClick={onDelete}>Disiscriviti</Button>
            </div>
          )}
      </Card.Body>
    </Card>
  );
}
export default Cards;