import { Outlet } from 'react-router-dom';

import './Layout.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
function Layout({products,cart ,setTab ,tab , setToken}) {
    
    
    return ( 
        <div>
            <Header/>
            <Navbar setTab={setTab} tab={tab} products={products} cart={cart}  setToken={setToken}/>
            <Outlet/>
            <Footer/>
        </div>
     );
}

export default Layout;