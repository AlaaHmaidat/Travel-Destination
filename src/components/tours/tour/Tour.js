import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TourDetails from '../../TourDetails/TourDetails';
import './Tour.css';
import { useNavigate } from 'react-router-dom';

function Tour(props) {
    const navigate = useNavigate();

    return (
        <>
            <Card style={{ width: '18rem' }} className="cards">
                <Card.Img variant="top" src={props.data.image} alt={props.data.name} />
                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(`/city/${props.data.id}`)} >Show</Button>
                </Card.Body>
            </Card>

        </>
    );
}

export default Tour;