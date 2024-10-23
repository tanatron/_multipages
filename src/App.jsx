import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { fetchProducts } from './data/product'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Layout from './Layouts/Layout/Layout'
import Home from './Page/Home/Home'
import Todo from './Page/Todo/Todo'
import Calculator from './Page/Calculator/Calculator'
import Cart from './Page/Carts/Carts'
import Products from './Page/Products/Products'
import Login from './Page/Login/Login'
import BouncingBall from './Page/Animation/Animation'
import Component from './Page/Component/Component'

const initTab = 'home'

function App() {

  const [token, setToken] = useState('')
  const  [role, setRole] = useState('')

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    setProducts(fetchProducts())
  }, [])

  useEffect(() => { console.log(products) }, [products])

  const [tab, setTab] = useState('home')

  useEffect(() => {
    setTab(initTab)
  }, [])

  if (token === '') {
    return (<Login setToken={setToken} setRole={setRole}/>)
  } else {
    return (
      <div className='App-container'>
        <HashRouter>
          <Routes>
            <Route element={<Layout products={products} cart={cart} tab={tab} setTab={setTab} setToken={setToken} />}>
              <Route path='/' element={<Home />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Calculator' element={<Calculator />} />
              <Route path='/BouncingBall' element={<BouncingBall />} />
              <Route path='/Component' element={<Component />} />
              <Route path='/Products' element={<Products
                products={products}
                cart={cart}
                setCart={setCart} />} />
              <Route path='/Todo' element={<Todo />} />
              <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    )
  }
}

export default App
