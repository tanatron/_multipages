import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Carts.css';

function Carts({ cart, setCart }) {
    return (
        <div className='Cart-container'>
            <div className="cart-item-container">
                {cart.map((item) => { // เปลี่ยนชื่อจาก 'cart' เป็น 'item'
                    return (
                        <Card style={{ width: '18rem' }} key={item.id}>
                            <Card.Img variant="top" src={item.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <b>${item.price.toFixed(2)}</b>
                                </Card.Text>
                                <Button
                                    variant="outline-danger"
                                    onClick={() => {
                                        // ใช้ setCart เพื่ออัปเดตค่ารถเข็น
                                        setCart(cart.filter((c) => c.id !== item.id)); // ใช้ 'item.id' แทน
                                    }}
                                >
                                    Remove From Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>

            <h4>Items: <span className='badge bg-danger'>{cart.length}</span> items - total Price: <span className='badge bg-success'>${cart.reduce((prev, cart) => {
                return prev + cart.price
            }, 0).toFixed(2)}</span>
            </h4>

            <button className='btn btn-warning'>Checkout</button>
        </div>
    );
}

export default Carts; 
