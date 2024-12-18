# Part 4: Implementation Documentation

## Introduction

This document provides a comprehensive explanation of the implementation process for the TradeHive application, covering all features outlined in the challenge. The goal was to create a robust platform for renting and buying/selling products while adhering to best practices in software engineering. The solution includes a Frontend (React with Apollo Client), a Backend (Node.js with GraphQL), and a Postgres Database managed with Prisma ORM.

## Part 1: Preliminary Features

### Login and User Registration

- **Login**: A basic string-matching approach was used for user authentication, ensuring simplicity as per the challenge requirements.
- **User Registration**: Implemented a secure registration process using hashed passwords and input validations to ensure data integrity.
- **Frontend**:
  - React was used with functional components and hooks for state management.
  - React Hook Form was chosen for efficient form handling and validation.
- **Backend**:
  - Developed using Express.js with Apollo Server to expose GraphQL APIs.
  - Prisma was used for schema definition, migrations, and database interactions.

## Part 2: Core Features

### Product Management (Add, Edit, Delete)

- **Add Product**:
  - Multi-page form designed per the provided wireframe.
  - Navigation between steps with persistent form state using React Router and local state management.
- **Edit Product**:
  - Implemented a form pre-populated with existing product details, enabling seamless updates.
- **Delete Product**:
  - Provided users the ability to delete products, with real-time updates to the Apollo cache.
- **Data Modeling**:
  - Products are linked to categories, allowing multiple category associations per product.
  - Categories include: ELECTRONICS, FURNITURE, HOME APPLIANCES, SPORTING GOODS, OUTDOOR, and TOYS.

## Part 3: Advanced Features

### Listing and Transactions

- **List All Products**:
  - A responsive product listing page displaying all available products.
  - Optimized GraphQL queries with filtering and sorting capabilities.
- **Buy Product**:
  - Once a product is bought, it is marked as "sold" in the database.
- **Rent Product**:
  - Handled time overlap scenarios with validation during rent initiation.
- **User-Specific Transactions**:
  - Separate views for bought, sold, borrowed, and lent products.

### Corner Cases

- **Time Overlaps for Renting**:
  - 
- **Error Handling**:
  - Comprehensive error messages for both frontend and backend failures.
- **Concurrent Updates**:
  - Resolved conflicts with transactions by locking relevant database rows during updates.

## Folder Structure

The project follows an N-Tier architecture for scalability and maintainability.

```
TradeHive/
|-- frontend/
|   |-- src/
|       |-- components/ (Reusable React components)
|       |-- pages/ (Route-level components)
|       |-- graphql/ (GraphQL queries and mutations)
|-- backend/
|   |-- src/
|       |-- resolvers/ (GraphQL resolvers)
|       |-- schema/ (GraphQL type definitions)
|       |-- models/ (Prisma models)
|-- prisma/ (Schema and migrations)
|-- docker-compose.yml
|-- README.md
```

## Best Practices Adopted

- **State Management**:
  - Used Apollo’s in-memory cache to minimize redundant API calls.
- **Component Reusability**:
  - Modularized React components to enhance reusability and readability.
- **Error Handling**:
  - Provided detailed error responses for both API and UI-level errors.
- **Code Quality**:
  - Prettier and ESLint were used to maintain code consistency.

## Technologies Used

- **Frontend**:
  - React, Apollo Client, React Hook Form, Mantine
- **Backend**:
  - Node.js, Express.js, Apollo Server, Prisma
- **Database**:
  - PostgreSQL
- **DevOps**:
  - Docker for containerization

## Conclusion

The TradeHive application was developed with a focus on functionality, scalability, and adherence to best practices. While meeting the challenge requirements. For further details on running the application, please refer to the README.md file included in the submission.

