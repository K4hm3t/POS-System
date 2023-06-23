import React from 'react';

export default function Product({ filteredProducts, filterProducts, addToSales }) {
  return (
    <section className="container">
        <div className='row'>
          <div className="col">
          <button
            type="button"
            className="btn btn-primary btn w-3 rounded-pill category-button mx-1 my-2"
            onClick={() => filterProducts('All')}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-primary btn w-3 rounded-pill category-button mx-1 my-2"
            onClick={() => filterProducts('Desktop')}
          >
            Desktop
          </button>
          <button
            type="button"
            className="btn btn-primary btn w-3 rounded-pill category-button mx-1 my-2"
            onClick={() => filterProducts('Mobile')}
          >
            Mobile
          </button>
          <button
            type="button"
            className="btn btn-primary btn w-3 rounded-pill category-button mx-1 my-2"
            onClick={() => filterProducts('CPU')}
          >
            CPU
          </button>
          <button
            type="button"
            className="btn btn-primary btn w-3 rounded-pill category-button mx-1 my-2"
            onClick={() => filterProducts('GPU')}
          >
            GPU
          </button>
        </div>
        </div>
       <div className="row bg-light mt-2 py-3 rounded product-list">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="col-md-4 d-flex align-items-stretch"
            onClick={() => addToSales(product)}
          >
            <div className="card position-relative shadow-sm p-3 mb-5 mx-2 bg-transparent-tertiary rounded product">
            <span className="position-absolute top-0 start-0 badge bg-secondary rounded-pill price">
                {product.price}€
              </span>
              <img
                src={product.image}
                className="card-img-top"
                alt="Product"
                style={{ objectFit: 'contain'}}
              />
              <div className="card-body d-flex align-items-center justify-content-center" style={{ height: '5rem' }}>
                <p className="card-text text-center">{product.brand} {product.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
