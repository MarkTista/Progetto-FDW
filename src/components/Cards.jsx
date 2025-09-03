import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from'react-router-dom'

/*
function Cards({title,text,img,isAddCard,onClick,id}) {
  return (
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="foto" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}
        </Card.Text>
        {isAddCard ? <Button  variant="secondary" onClick={onClick}>Aggiungi Corso</Button> :
         <Link to={`/Homepaged/corso/${id}/lezione`}>
            <Button variant="primary">Aggiungi Lezione</Button>
          </Link>
          }
      </Card.Body>
    </Card>
  );
}
  */
function Cards({ title, text, img, id, role, isAddCard, onClick }) {
  return (
    //MODIFICARE CON IL RENDER CONDIZONALE
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={img} alt="foto" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {
          role === 'docente'
            ? isAddCard
              ? <Button variant="secondary" onClick={onClick}>Aggiungi Corso</Button>
              : <Link to={`/Homepaged/corso/${id}/lezione`}>
                  <Button variant="primary">Aggiungi Lezione</Button>
                </Link>
            : role === 'studente'
              ? <Link to={`/Homepaged/corso/${id}/lezione`}>
                  <Button variant="info">Visualizza Lezioni</Button>
                </Link>
              : null
        }

      </Card.Body>
    </Card>
  );
}


//{isAddCard ? <Button variant="secondary">Aggiungi Corso</Button> : <Button variant="primary">Aggiungi Lezione</Button> } RENDERING CONDIZIONALE

export default Cards;