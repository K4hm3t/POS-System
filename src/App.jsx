import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Product from './Components/Product';
import Sales from './Components/Sales';
import productsData from './products.json';
import {ComponentToPrint} from './Components/ComponentToPrint'
import { useReactToPrint } from 'react-to-print';

export default function App() {
  const allProducts = productsData;
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [sales, setSales] = useState([]);

  const filterProducts = (category) => {
    if (category === 'All') {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) => product.type === category);
      setFilteredProducts(filtered);
    }
  };

  const addToSales = (product) => {
    const existingProduct = sales.find((sale) => sale.id === product.id);
    if (existingProduct) {
      const updatedSales = sales.map((sale) => {
        if (sale.id === product.id) {
          return { ...sale, amount: sale.amount + 1 };
        }
        return sale;
      });
      setSales(updatedSales);
    } else {
      const newSale = { id: product.id, name: product.name, price: product.price, amount: 1 };
      setSales([...sales, newSale]);
    }
  };

  const removeSale = (saleId) => {
    const updatedSales = sales.filter((sale) => sale.id !== saleId);
    setSales(updatedSales);
  };

  const resetSales = () => {
    setSales([]);
  };

  const calculateTotalAmount = () => {
    return sales.reduce((total, sale) => total + sale.price * sale.amount, 0);
  };

  const componentRef = useRef()

  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint = () =>{
    handleReactToPrint();
  }


  return (
    <div className="container py-3 px-4 bg-primary-subtle">
      <div style={{display: "none"}}>
        <ComponentToPrint sales={sales} ref={componentRef} calculateTotalAmount={calculateTotalAmount}/>
      </div>
      <div className="row align-items">
        <div className="col">
          <Product filteredProducts={filteredProducts} filterProducts={filterProducts} addToSales={addToSales} />
        </div>
        <div className="col mt-3">
          <Sales sales={sales} removeSale={removeSale} resetSales={resetSales} handlePrint={handlePrint} calculateTotalAmount={calculateTotalAmount} />
        </div>
      </div>
    </div>
  );
}
