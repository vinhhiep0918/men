import logo from './logo.svg';
import './App.css';
import Routers from './Routers';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([]);
  const [productDESC, setProductDESC] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const respone = await fetch('http://localhost:3001/products');
      const data = await respone.json();
      setProducts(data)
      localStorage.setItem('productNew',JSON.stringify(data))
    }
    getProducts();
  }, []);

  const addProducts = async (item) => {
    var a = products[products.length - 1].id;
    // products.map(product=> Number(product.id) > a ?  a=Number(product.id) : a=a )
    const data = {
      id: a + 1,
      ...item
    }
    await fetch('http://localhost:3001/products',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    setProducts([...products, data])
  }
  const removeProduct = async (id) => {
    let confirmRemove = window.confirm('ban co chac han muon xoa khong');
    if (confirmRemove) {
      await fetch(`http://localhost:3001/products/${id}`, {
        method: "DELETE"
      })
      const newProduct = products.filter(product => product.id !== id)
      setProducts(newProduct)
    }
  }
  const onEditProduct = async (product) => {
    await fetch(`http://localhost:3001/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    const newProduct = products.map(item => item.id == product.id ? product : item)
    setProducts(newProduct);
  }
  const getSearch = async (search) => {
    if (search == null) return null
    const respone = await fetch(`http://localhost:3001/products?q=${search}`);
    const data = await respone.json();
    setProducts(data)
  }
  localStorage.setItem('productNew',JSON.stringify(products))
  const onProductDESC = (item) => {
    setProductDESC(item)
  }
  return (
    <div className="App">
      <Routers productDESC={productDESC} products={products} onAdd={addProducts}
        onRemove={removeProduct} onEdit={onEditProduct}
        onSearch={getSearch} onProductDESC={onProductDESC}  />
    </div>
  );
}

export default App;
