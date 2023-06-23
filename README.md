# Point of Sale (POS) System

The Point of Sale (POS) System is a web-based application built using React. It provides a user-friendly interface for managing sales transactions, product listing, and generating receipts. The project allows small businesses and retail environments to streamline their sales processes and keep track of inventory.

## Features

- Product Listing: Browse and filter products by category (e.g., Mobile, Desktop, CPU, GPU).
- Add to Sales: Click on product cards to add items to the sales list.
- Remove Items: Remove individual items from the sales list.
- Reset Sales: Clear the entire sales list.
- Receipt Generation: By clicking the Pay button generate printable receipts using the `react-to-print` library.
- Total Amount Calculation: Automatically calculate the total amount for the sales.

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Project Structure

The project structure is organized as follows:

- `src/Components`: Contains React components for the product listing, sales, and other UI elements.
- `src/products.json`: JSON file with product data (type, brand, name, price, quantity, image).
- `src/App.jsx`: Main component that renders the product listing and sales components.
- `src/index.js`: Entry point of the application.

## Dependencies

- React: JavaScript library for building user interfaces.
- Bootstrap: CSS framework for styling the application.
- react-to-print: Library for printing receipts.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, feel free to submit a pull request.

## Acknowledgements

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [react-to-print](https://www.npmjs.com/package/react-to-print)

