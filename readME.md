# Node.js CRUD API for Products

This is a basic CRUD (Create, Read, Update, Delete) API for managing products built using Node.js, Express, and MongoDB. You can use this API to learn how to develop and test APIs using Node.js, as well as to practice making API calls using tools like Postman.

## Getting Started

Before running the API, make sure you have Node.js and MongoDB installed on your system.

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Start the server by running `npm run dev`.

### Prerequisites

- Express: Install Express using `npm i express`.
- MongoDB: Install MongoDB using `npm install mongodb`.
- Mongoose: Install Mongoose using `npm i mongoose`.

## Endpoints

- **GET /api/products**: Retrieve all products.
- **GET /api/product/:id**: Retrieve a specific product by its ID.
- **POST /api/products**: Create a new product.
- **PUT /api/product/:id**: Update an existing product by its ID.
- **DELETE /api/product/:id**: Delete a product by its ID.

## Example Usage

### Create a new product

POST /api/products
Content-Type: application/json

{
    "name": "Mac Book Pro",
    "quantity": 6,
    "price": 900
}
