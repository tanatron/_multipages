import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Products.css';
function Products({ products, cart, setCart }) {
    return (
        <div className="product-container">
            <div className="product-item-container">
                {products.map((product) => {
                    return (
                        <Card style={{ width: '18rem' }} key={product.id}>
                            <Card.Img variant="top" src={product.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    <b>${product.price.toFixed(2)}</b>
                                </Card.Text>

                                {cart.find((cart) => cart.id === product.id) ?
                                (<span className='badge bg-danger'>Added</span>)
                                :
                                (<Button variant="outline-primary" onClick={() => {
                                    setCart([...cart, product])
                                }}>Add to Cart</Button>)
                                
                                }

                                
                            </Card.Body>
                        </Card>)
                })}

            </div>
        </div>
    );
}

export default Products;