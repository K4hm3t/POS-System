import React from 'react';

export default function Sales({ sales, removeSale, resetSales, handlePrint, calculateTotalAmount }) {


  const handleReset = () => {
    resetSales();
  };

  return (
    <div className="container mt-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.name}</td>
              <td>{sale.amount}</td>
              <td>{sale.price * sale.amount} €</td>
              <td>
                <button onClick={() => removeSale(sale.id)} className="btn btn-danger rounded-pill">
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-amount">
        <h3>Total Amount: {calculateTotalAmount()}€</h3>
      </div>

          <div className='d-flex justify-content-end ml-5'>
            <button onClick={handleReset} className="btn btn-danger mt-3 px-4 py-2 fs-5">
              RESET
            </button>
            {calculateTotalAmount() !== 0?
            <button className='btn btn-success mt-3 ms-5 px-5 fs-5' onClick={handlePrint}>PAY</button>
            : ''}
          </div>

    </div>
  );
}
