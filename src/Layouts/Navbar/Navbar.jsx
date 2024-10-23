import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ products, cart, tab, setTab, setToken }) {

    return (
        <div className="Navbar-container">


            <Link to="/home">
                <button
                    className={"btn " + (tab === 'home' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('home')}>
                    Home
                </button>
            </Link>

            <Link to="/calculator">
                <button
                    className={"btn " + (tab === 'calculator' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('calculator')}>
                    Calculator
                </button>
            </Link>
            <Link to="/BouncingBall">
                <button
                    className={"btn " + (tab === 'BouncingBall' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('BouncingBall')}>
                    Animation
                </button>
            </Link>

            <Link to="/Component">
                <button
                    className={"btn " + (tab === 'Component' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('Component')}>
                    Component
                </button>
            </Link>
            
            <Link to="/todo">
                <button
                    className={"btn " + (tab === 'todo' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('todo')}>
                    Todo
                </button>
            </Link>


            <Link to="/products">
                <button
                    className={"btn " + (tab === 'products' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('products')}>
                    Products ({products.length})
                </button>
            </Link>

            <Link to="/cart">
                <button
                    className={"position-relative btn " + (tab === 'cart' ? 'btn-primary' : 'btn-outline-primary')}
                    onClick={() => setTab('cart')}>
                    Cart
                    {cart.length > 0 && (<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length < 10 ? cart.length : '9+'}
                        <span class="visually-hidden">unread messages</span>
                    </span>)}


                </button>
            </Link>

            <button className='btn btn-danger' style={{ marginLeft: '1rem' }} onClick={() => setToken('')}>Logout</button>
        </div>
    );
}

export default Navbar;