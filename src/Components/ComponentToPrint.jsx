import React from "react";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const { sales, calculateTotalAmount } = props;

  const current = new Date();
  const date = `${current.getDate()}.${current.getMonth() + 1}.${current.getFullYear()}`;

  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="container p-3" ref={ref}>
      <h3 className="text-center">POS Receipt</h3>
      <hr></hr>
      <h4 className="text-center">Ahmet Kahrimanovic d.o.o</h4>
      <p className="text-center">Gracanica, Bosnia and Herzegovina</p>
      <p className="text-center">ahmet.kahrimanovic@mail.com</p>
      <p className="text-center">{date} {time}</p>
      <hr></hr>
      <div className="row">
        <div className="col">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th>Name</th>
                <th>Qt</th>
                <th>Price</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => (
                <tr key={sale.id}>
                  <td>{sale.name}</td>
                  <td>{sale.amount}x</td>
                  <td>{sale.price} €</td>
                  <td>{sale.price * sale.amount} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row me-3 mt-1">
        <div className="col text-end me-5">
          <h4>To Pay: {calculateTotalAmount()} €</h4>
        </div>
      </div>
      <hr></hr>
      <p className="text-center">Payment Method: Credit Card</p>
      <p className="text-center">Receipt Number: 123456789</p>
      <hr></hr>
      <p className="text-center">Thank you for shopping with us!</p>
    </div>
  );
});
