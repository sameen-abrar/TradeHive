/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "mutation RegisterMutation($firstName: String!, $lastName: String!, $email: String!, $phone: String!, $password: String!, $address: String!) {\n  register(\n    firstName: $firstName\n    lastName: $lastName\n    email: $email\n    phone: $phone\n    password: $password\n    address: $address\n  )\n}": types.RegisterMutationDocument,
    "mutation AddProduct($title: String!, $description: String!, $price: Float!, $rentPrice: Float!, $rentType: String, $categoryIds: [Int!]!, $createdBy: Int!) {\n  addProduct(\n    title: $title\n    description: $description\n    price: $price\n    rentPrice: $rentPrice\n    rentType: $rentType\n    categoryIds: $categoryIds\n    createdBy: $createdBy\n  )\n}\n\nmutation UpdateProduct($productId: Int!, $title: String, $description: String, $price: Float, $rentPrice: Float!, $rentType: String) {\n  updateProduct(\n    productId: $productId\n    title: $title\n    description: $description\n    price: $price\n    rentPrice: $rentPrice\n    rentType: $rentType\n  )\n}\n\nmutation Rent($productId: Int!, $userId: Int!, $fromDate: Date!, $toDate: Date!) {\n  rentProduct(\n    productId: $productId\n    userId: $userId\n    fromDate: $fromDate\n    toDate: $toDate\n  )\n}\n\nmutation Buy($userId: Int!, $productId: Int!) {\n  buyProduct(userId: $userId, productId: $productId)\n}": types.AddProductDocument,
    "query LoginQuery($email: String!, $password: String!) {\n  login(email: $email, password: $password)\n}": types.LoginQueryDocument,
    "query getAll {\n  getAllProducts {\n    id\n    title\n    description\n    price\n    rentPrice\n    rentType\n    categories\n    createdAt\n  }\n}\n\nquery getProductById($productId: Int!) {\n  getProduct(productId: $productId) {\n    id\n    title\n    description\n    price\n    rentPrice\n    rentType\n    categories\n    createdAt\n  }\n}\n\nquery getAllbyUserId($userId: Int!) {\n  getProductsByUserId(userId: $userId) {\n    id\n    title\n    description\n    price\n    rentPrice\n    rentType\n    categories\n    createdAt\n  }\n}\n\nquery DeleteProduct($productId: Int!) {\n  deleteProduct(productId: $productId)\n}\n\nquery GetAllByUser($userId: Int!) {\n  getProductsByUserId(userId: $userId) {\n    id\n    title\n    description\n    price\n    rentPrice\n    rentType\n    categories\n    createdAt\n  }\n}\n\nquery GetUserProducts($userId: Int!) {\n  getUserProducts(userId: $userId) {\n    bought {\n      id\n      title\n      description\n      price\n      rentPrice\n      rentType\n      categories\n      createdAt\n    }\n    sold {\n      id\n      title\n      description\n      price\n      rentPrice\n      rentType\n      categories\n      createdAt\n    }\n    borrowed {\n      id\n      title\n      description\n      price\n      rentPrice\n      rentType\n      categories\n      createdAt\n    }\n    lent {\n      id\n      title\n      description\n      price\n      rentPrice\n      rentType\n      categories\n      createdAt\n    }\n  }\n}": types.GetAllDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RegisterMutation($firstName: String!, $lastName: String!, $email: String!, $phone: String!, $password: String!, $address: String!) {\n  register(\n    firstName: $firstName\n    lastName: $lastName\n    email: $email\n    phone: $phone\n    password: $password\n    address: $address\n  )\n}"): (typeof documents)["mutation RegisterMutation($firstName: String!, $lastName: String!, $email: String!, $phone: String!, $password: String!, $address: String!) {\n  register(\n    firstName: $firstName\n    lastName: $lastName\n    email: $email\n    phone: $phone\n    password: $password\n    address: $address\n  )\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddProduct($title: String!, $description: String!, $price: Float!, $rentPrice: Float!, $rentType: String, $categoryIds: [Int!]!, $createdBy: Int!) {\n  addProduct(\n    title: $title\n    description: $description\n    price: $price\n    rentPrice: $rentPrice\n    rentType: $rentType\n    categoryIds: $categoryIds\n    createdBy: $createdBy\n  )\n}\n\nmutation UpdateProduct($productId: Int!, $title: String, $description: String, $price: Float, $rentPrice: Float!, $rentType: String) {\n  updateProduct(\n    productId: $productId\n    title: $title\n    description: $description\n    price: $price\n    rentPrice: $rentPrice\n    rentType: $rentType\n  )\n}\n\nmutation Rent($productId: Int!, $userId: Int!, $fromDate: Date!, $toDate: Date!) {\n  rentProduct(\n    productId: $productId\n    userId: $userId\n    fromDate: $fromDate\n    toDate: $toDate\n  )\n}\n\nmutation Buy($userId: Int!, $productId: Int!) {\n  buyProduct(userId: $userId, productId: $productId)\n}"): (typeof documents)["mutation AddProduct($title: String!, $description: String!, $price: Float!, $rentPrice: Float!, $rentType: String, $categoryIds: [Int!]!, $createdBy: Int!) {\n  addProduct(\n    title: $title\n    description: $description\n    price: $price\n    rentPrice: $rentPrice\n    rentType: $rentType\n    categoryIds: $categoryIds\n    createdBy: $createdBy\n  )\n}\n\nmutation UpdateProduct($productId: Int!, $title: String, $description: String, $price: Float, $rentPrice: Float!, $rentType: String) {\n  updateProduct(\n    productId: $productId\n    title: $title\n    description: $description\n    price: $price\n    rentPrice: $rentPrice\n    rentType: $rentType\n  )\n}\n\nmutation Rent($productId: Int!, $userId: Int!, $fromDate: Date!, $toDate: Date!) {\n  rentProduct(\n    productId: $productId\n    userId: $userId\n    fromDate: $fromDate\n    toDate: $toDate\n  )\n}\n\nmutation Buy($userId: Int!, $productId: Int!) {\n  buyProduct(userId: $userId, productId: $productId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query LoginQuery($email: String!, $password: String!) {\n  login(email: $email, password: $password)\n}"): (typeof documents)["query LoginQuery($email: String!, $password: String!) {\n  login(email: $email, password: $password)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getAll {\n  getAllProducts {\n    id\n    title\n    description\n    price\n    rentPrice\n    rentType\n    categories\n    createdAt\n  }\n}\n\nquery getProductById($productId: Int!) {\n  getProduct(productId: $productId) {\n    id\n    title\n    description\n    price\n    rentPrice\n    rentType\n    categories\n    createdAt\n  }\n}\n\nquery getAllbyUserId($userId: Int!) {\n  getProductsByUserId(userId: $userId) {\n    id\n    title\n    description\n    price\n    rentPrice\n    rentType\n    categories\n    createdAt\n  }\n}\n\nquery DeleteProduct($productId: Int!) {\n  deleteProduct(productId: $productId)\n}\n\nquery GetAllByUser($userId: Int!) {\n  getProductsByUserId(userId: $userId) {\n    id\n    title\n    description\n    price\n    rentPrice\n    rentType\n    categories\n    createdAt\n  }\n}\n\nquery GetUserProducts($userId: Int!) {\n  getUserProducts(userId: $userId) {\n    bought {\n      id\n      title\n      description\n      price\n      rentPrice\n      rentType\n      categories\n      createdAt\n    }\n    sold {\n      id\n      title\n      description\n      price\n      rentPrice\n      rentType\n      categories\n      createdAt\n    }\n    borrowed {\n      id\n      title\n      description\n      price\n      rentPrice\n      rentType\n      categories\n      createdAt\n    }\n    lent {\n      id\n      title\n      description\n      price\n      rentPrice\n      rentType\n      categories\n      createdAt\n    }\n  }\n}"): (typeof documents)["query getAll {\n  getAllProducts {\n    id\n    title\n    description\n    price\n    rentPrice\n    rentType\n    categories\n    createdAt\n  }\n}\n\nquery getProductById($productId: Int!) {\n  getProduct(productId: $productId) {\n    id\n    title\n    description\n    price\n    rentPrice\n    rentType\n    categories\n    createdAt\n  }\n}\n\nquery getAllbyUserId($userId: Int!) {\n  getProductsByUserId(userId: $userId) {\n    id\n    title\n    description\n    price\n    rentPrice\n    rentType\n    categories\n    createdAt\n  }\n}\n\nquery DeleteProduct($productId: Int!) {\n  deleteProduct(productId: $productId)\n}\n\nquery GetAllByUser($userId: Int!) {\n  getProductsByUserId(userId: $userId) {\n    id\n    title\n    description\n    price\n    rentPrice\n    rentType\n    categories\n    createdAt\n  }\n}\n\nquery GetUserProducts($userId: Int!) {\n  getUserProducts(userId: $userId) {\n    bought {\n      id\n      title\n      description\n      price\n      rentPrice\n      rentType\n      categories\n      createdAt\n    }\n    sold {\n      id\n      title\n      description\n      price\n      rentPrice\n      rentType\n      categories\n      createdAt\n    }\n    borrowed {\n      id\n      title\n      description\n      price\n      rentPrice\n      rentType\n      categories\n      createdAt\n    }\n    lent {\n      id\n      title\n      description\n      price\n      rentPrice\n      rentType\n      categories\n      createdAt\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;