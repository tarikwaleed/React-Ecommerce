import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props) {
    return (
        <Card className='m-4' style={{ width: '18rem' }}>
            <Card.Img className='p-5' variant="top" src={props.imageUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;