import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {
    const navigate = useNavigate()
    const productId = 909
    return (
        <div>
            <Card className='m-4 ' style={{ width: '18rem' }}>
                <Card.Img role="button" onClick={() => { navigate('/product', { state: { productId: props.productId } }) }} className='p-5 cursor ' variant="top" src={props.imageUrl} style={{ height: '25rem' }} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.price}</Card.Text>
                    <Card.Text>{props.rating}</Card.Text>
                    {/* you have to put '/' before route name,because id you didn't put it */}
                    {/* it'll navigate to '/shop/product_details' */}
                </Card.Body>
            </Card>

        </div>
    );
}

export default ProductCard;